import { useDispatch } from 'react-redux'
import { getText } from '../../store/reducer/info-banner'
import Restaurant from '../restaurant'
import * as S from './style'
import { useGetRestaurantsQuery } from '../../services/api'
const RestaurantList = () => {
  const dispatch = useDispatch()
  function handleCardClick(titulo: string, tipo: string, capa: string) {
    const res = {
      titleBanner: titulo,
      infoBanner: tipo,
      imageBanner: capa
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
        {data.map(({ id, descricao, titulo, tipo, avaliacao, capa }) => (
          <li key={id} onClick={() => handleCardClick(titulo, tipo, capa)}>
            <Restaurant
              id={id}
              titulo={titulo}
              descricao={descricao}
              image={capa}
              type={tipo}
              avaliacao={avaliacao}
            />
          </li>
        ))}
      </ul>
    </S.ContainerCards>
  )
}
export default RestaurantList
