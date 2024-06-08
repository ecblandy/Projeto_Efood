import { useSelector } from 'react-redux'
import * as S from './styled'
import { RootReducer } from '../../store'

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
          <h2>{titleBanner}</h2>
        </S.DivContent>
      </S.Container>
    </S.BackgroundDivImg>
  )
}
export default Banner
