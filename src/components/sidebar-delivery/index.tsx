import { useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useFormik } from 'formik'
// COMPONENTS
// UTILS
import * as S from '../../styles'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
import { addDelivery } from '../../store/reducer/payment'
import Button from '../button'

type ViaCepResponse = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
  erro?: boolean
}

const SidebarDelivery = () => {
  const dispatch = useDispatch()

  // Verifica se o campo teve foco e se tem erro.
  const inputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors
    const hasError = isTouched && isError
    return hasError
  }
  // Verifica se o campo foi focado e se é = 9 caracteres
  const getBlur = (e: React.FormEvent<HTMLInputElement>) => {
    form.handleBlur(e)
    if (form.values.cep.length === 9) {
      fetchCep(form.values.cep)
    }
  }

  // Validação, e submit do formulario.
  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ser pelo menos 5 caracter')
        .required('O campo é obrigatorio'),
      address: Yup.string().required('O campo é obrigatorio'),
      cep: Yup.string()
        .min(9, 'Precisa ter 9 caracteres')
        .max(9, 'Precisa ter 9 caracteres')
        .required('O campo é obrigatorio'),
      city: Yup.string()
        .min(1, 'O nome precisa ser pelo menos 1 caracter')
        .required('O campo é obrigatorio'),
      number: Yup.string().required('O campo é obrigatorio')
    }),
    onSubmit: (values) => {
      sidebarChange('payment')
      dispatch(
        addDelivery({
          delivery: {
            receiver: values.name,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.cep,
              number: Number(values.number),
              complement: values.complement
            }
          }
        })
      )
    },
    validateOnBlur: true,
    validateOnChange: false
  })

  // Requisição API CEP
  const fetchCep = async (cep: string): Promise<void> => {
    try {
      const replace = cep.replaceAll('-', '')
      const endpoint = `https://viacep.com.br/ws/${replace}/json/`
      const response = await fetch(endpoint)
      const data: ViaCepResponse = await response.json()
      if (!data.erro) {
        form.setFieldValue('address', data.logradouro)
        form.setFieldValue('city', data.localidade)
      } else {
        form.setFieldError('cep', form.values.cep)
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error)
      form.setFieldError('cep', form.values.cep)
    }
  }

  // Altera a sidebar
  function sidebarChange(value: string) {
    dispatch(
      alteraSidebar({
        currentSidebar: value as 'cart' | 'delivery' | 'payment' | 'finish'
      })
    )
  }

  return (
    <S.Container>
      <S.Form onSubmit={form.handleSubmit}>
        <div>
          <h4>Entrega</h4>
          <S.InputGroup>
            <label htmlFor="name">Quem irá receber</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={inputHasError('name') ? 'is-error' : ''}
            />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={inputHasError('address') ? 'is-error' : ''}
            />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={inputHasError('city') ? 'is-error' : ''}
            />
          </S.InputGroup>

          <S.ContainerGroup>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <InputMask
                type="text"
                name="cep"
                id="cep"
                mask="99999-999"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={getBlur}
                className={inputHasError('cep') ? 'is-error' : ''}
              />
            </S.InputGroup>

            <S.InputGroup $marginLeft="34px">
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="number"
                id="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('number') ? 'is-error' : ''}
              />
            </S.InputGroup>
          </S.ContainerGroup>

          <S.InputGroup>
            <label htmlFor="complement">Complemento(Opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
        </div>

        <Button type="submit">Continuar com o pagamento</Button>
        <Button type="button" clicked={() => sidebarChange('cart')}>
          Voltar para o carrinho
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default SidebarDelivery
