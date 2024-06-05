import { useDispatch } from 'react-redux'
import { getText } from '../../store/reducer/info-banner'
import Restaurant from '../restaurant'
import restaurantStore from './restaurants-store'
import * as S from './style'
const RestaurantList = () => {
  const dispatch = useDispatch()
  function handleCardClick(title: string, info: string[]) {
    const res = {
      titleBanner: title,
      infoBanner: [...info]
    }
    dispatch(getText(res))
  }
  return (
    <S.ContainerCards>
      <ul>
        {restaurantStore.map(({ id, description, title, image, infos }) => (
          <li key={id} onClick={() => handleCardClick(title, infos)}>
            <Restaurant
              id={id}
              title={title}
              description={description}
              image={image}
              infos={infos}
            />
          </li>
        ))}
      </ul>
    </S.ContainerCards>
  )
}
export default RestaurantList
