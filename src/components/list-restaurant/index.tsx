import { useDispatch } from 'react-redux'
// COMPONENTS
import Restaurant from '../restaurant'
// UTILS
import * as S from './style'
import { getText } from '../../store/reducer/infos'
import { useGetRestaurantsQuery } from '../../services/api'

const RestaurantList = () => {
  const dispatch = useDispatch()
  function handleCardClick(
    titulo: string,
    tipo: string,
    capa: string,
    cardapio: PropsProduct[]
  ) {
    const res = {
      titleBanner: titulo,
      infoBanner: tipo,
      imageBanner: capa,
      cardapio: cardapio
    }
    dispatch(getText(res))
  }

  const { data } = useGetRestaurantsQuery()
  if (!data) {
    return <h2>Carregando..</h2>
  }
  return (
    <S.ContainerCards>
      <ul>
        {data.map(
          ({ id, descricao, titulo, tipo, avaliacao, capa, cardapio }) => (
            <li
              key={id}
              onClick={() => handleCardClick(titulo, tipo, capa, cardapio)}
            >
              <Restaurant
                id={id}
                titulo={titulo}
                descricao={descricao}
                image={capa}
                type={tipo}
                avaliacao={avaliacao}
              />
            </li>
          )
        )}
      </ul>
    </S.ContainerCards>
  )
}
export default RestaurantList
