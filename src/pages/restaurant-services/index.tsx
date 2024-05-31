import Footer from '../../components/footer'
import Header from '../../components/header'
import logoStore from '../../assets/img/apresentacao.png'
import * as S from './styles'
import Products from '../../components/list-products'
const RestaurantServices = () => (
  <>
    <Header isprofilepage="profile" />
    <S.BannerRestaurant>
      <img src={logoStore} alt="" />
    </S.BannerRestaurant>
    <Products />
    <Footer />
  </>
)
export default RestaurantServices
