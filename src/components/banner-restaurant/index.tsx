import { useSelector } from 'react-redux'
// UTILS
import { RootReducer } from '../../store'
import * as S from './styled'

const Banner = () => {
  const { infoBanner, titleBanner, imageBanner } = useSelector(
    (state: RootReducer) => state.getInfosBanner
  )

  return (
    <S.BackgroundDivImg style={{ backgroundImage: `url(${imageBanner})` }}>
      <S.Container>
        <S.DivContent>
          <div>
            <span key={infoBanner}>{infoBanner}</span>
          </div>
          <div>
            <h2>{titleBanner}</h2>
          </div>
        </S.DivContent>
      </S.Container>
    </S.BackgroundDivImg>
  )
}
export default Banner
