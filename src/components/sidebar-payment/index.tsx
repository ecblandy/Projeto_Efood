import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
// COMPONENTS
import Button from '../button'
// UTILS
// import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
import { RootReducer } from '../../store'
import { paraReal } from '../../utils/index'
import { addPayment } from '../../store/reducer/payment'
import * as S from '../../styles'
import { alteraSidebar } from '../../store/reducer/what-sidebar-is'
const SidebarPayment = () => {
  const dispatch = useDispatch()

  const { precoTotal } = useSelector((state: RootReducer) => state.cart)
  const inputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isError = fieldName in form.errors
    const hasError = isTouched && isError
    return hasError
  }

  const form = useFormik({
    initialValues: {
      name: '',
      number: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(4, 'Nome do cartão, obrigatorio').required(),
      number: Yup.string()
        .min(19, 'Precisa ter 4 caracteres')
        .max(19, 'Precisa ter 4 caracteres')
        .required('O campo é obrigatorio'),
      code: Yup.string()
        .min(3, 'Minimo de 3 caracteres')
        .max(3, 'Maximo de 3 caracteres')
        .required(),
      month: Yup.string()
        .min(2, 'Minimo de 2 caracteres')
        .max(2, 'Maximo de 2 caracteres')
        .required(),
      year: Yup.string()
        .min(2, 'Minimo de 2 caracteres')
        .max(2, 'Maximo de 2 caracteres')
        .required()
    }),
    onSubmit: (values) => {
      console.log(values)
      dispatch(alteraSidebar({ currentSidebar: 'finish' }))
      dispatch(
        addPayment({
          payment: {
            card: {
              name: values.name,
              code: Number(values.code),
              number: values.number,
              expires: {
                month: Number(values.month),
                year: Number(values.year)
              }
            }
          }
        })
      )
    }
  })

  return (
    <S.Container>
      <S.Form onSubmit={form.handleSubmit}>
        <div>
          <h4>Pagamento - Valor a pagar {paraReal(precoTotal)}</h4>
          <S.InputGroup>
            <label htmlFor="name">Nome do cartão</label>
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

          <S.ContainerGroup>
            <S.InputGroup>
              <label htmlFor="number">Numero do Cartão</label>
              <InputMask
                type="text"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('number') ? 'is-error' : ''}
                mask="9999 9999 9999 9999"
              />
            </S.InputGroup>

            <S.InputGroup $maxWidth="87px" $marginLeft="30px">
              <label htmlFor="code">CVV</label>
              <InputMask
                type="text"
                id="code"
                name="code"
                value={form.values.code}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('code') ? 'is-error' : ''}
                mask="999"
              />
            </S.InputGroup>
          </S.ContainerGroup>

          <S.ContainerGroup>
            <S.InputGroup>
              <label htmlFor="month">Mês de vencimento</label>
              <InputMask
                type="text"
                name="month"
                id="month"
                value={form.values.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('month') ? 'is-error' : ''}
                mask="99"
              />
            </S.InputGroup>

            <S.InputGroup $marginLeft="34px">
              <label htmlFor="year">Ano de vencimento</label>
              <InputMask
                type="text"
                name="year"
                id="year"
                value={form.values.year}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('year') ? 'is-error' : ''}
                mask="99"
              />
            </S.InputGroup>
          </S.ContainerGroup>
        </div>

        <Button type="submit">Finalizar Pagamento</Button>
        <Button
          type="button"
          clicked={() =>
            dispatch(alteraSidebar({ currentSidebar: 'delivery' }))
          }
        >
          Voltar para a edição de endereço
        </Button>
      </S.Form>
    </S.Container>
  )
}
export default SidebarPayment
