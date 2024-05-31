import Restaurant from '../restaurant'
import restaurantStore from './restaurants-store'
import * as S from './style'
const RestaurantList = () => (
  <S.ContainerCards>
    <ul>
      {restaurantStore.map(({ id, description, title, image, infos }) => (
        <Restaurant
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          infos={infos}
        />
      ))}
    </ul>
  </S.ContainerCards>
)

export default RestaurantList
