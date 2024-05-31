import logo from '../../assets/img/logo.png'
import instagram from '../../assets/img/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../assets/img/twitter-2-svgrepo-com 1.png'
import facebook from '../../assets/img/facebook-round-svgrepo-com 1.png'
import * as S from './styles'
const Footer = () => (
  <S.FooterContainer>
    <S.EFoodLogoFooter src={logo} alt="logo efood" />
    <S.BrandContainer>
      <li>
        <img className="brand" src={instagram} alt="logo instagram" />
      </li>
      <li>
        <img className="brand" src={twitter} alt="logo twitter" />
      </li>
      <li>
        <img className="brand" src={facebook} alt="logo facebook" />
      </li>
    </S.BrandContainer>
    <S.TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </S.TextFooter>
  </S.FooterContainer>
)
export default Footer
