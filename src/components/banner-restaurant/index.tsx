import { useSelector } from 'react-redux'
import BannerImgBackground from '../../assets/img/apresentacao.png'
import * as S from './styled'
import { RootReducer } from '../../store'
const Banner = () => {
  const { infoBanner, titleBanner } = useSelector(
    (state: RootReducer) => state.getInfosBanner
  )
  return (
    <S.BackgroundDivImg
      style={{ backgroundImage: `url(${BannerImgBackground})` }}
    >
      <S.Container>
        <S.DivContent>
          <div>
            {infoBanner.map((info) => (
              <span key={info}>{info}</span>
            ))}
          </div>
          <h2>{titleBanner}</h2>
        </S.DivContent>
      </S.Container>
    </S.BackgroundDivImg>
  )
}
export default Banner
