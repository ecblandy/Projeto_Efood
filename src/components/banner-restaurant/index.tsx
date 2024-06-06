import * as S from './styled'

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Banner = () => {
  const { infoBanner, titleBanner, imageBanner } = useSelector(
    (state: RootReducer) => state.getInfosBanner
  )

  return (
    <S.BannerRestaurant>
      <div className="image-container">
        <img src={imageBanner} alt="Banner imagem" />
        <S.DarkDiv></S.DarkDiv>
        <S.DivInfo>
          <S.ContainerInfo>
            <S.Info>{infoBanner}</S.Info>
          </S.ContainerInfo>
          <S.Title>{titleBanner}</S.Title>
        </S.DivInfo>
      </div>
    </S.BannerRestaurant>
  )
}
export default Banner
