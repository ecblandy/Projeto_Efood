import * as S from './styled'
import logoStore from '../../assets/img/apresentacao.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
const Banner = () => {
  const { infoBanner, titleBanner } = useSelector(
    (state: RootReducer) => state.getInfosBanner
  )
  return (
    <S.BannerRestaurant>
      <div className="image-container">
        <img src={logoStore} alt="" />
        <S.DarkDiv></S.DarkDiv>
        <S.DivInfo>
          <S.ContainerInfo>
            {infoBanner.map((info) => (
              <S.Info key={info}>{info}</S.Info>
            ))}
          </S.ContainerInfo>
          <S.Title>{titleBanner}</S.Title>
        </S.DivInfo>
      </div>
    </S.BannerRestaurant>
  )
}
export default Banner
