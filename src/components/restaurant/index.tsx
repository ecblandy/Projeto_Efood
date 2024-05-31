// import Tag from '../span'
import * as S from './styled'
import Button from '../button'
import star from '../../assets/img/estrela.png'
import { Link } from 'react-router-dom'
type Props = {
  image: string
  title: string
  infos: string[]
  description: string
  id: number
}
const Restaurant = ({ title, image, description, infos }: Props) => (
  <S.Card>
    <img src={image} alt="" />
    <div className="infos">
      {infos.map((info) => (
        <S.CardSpan key={info}>{info}</S.CardSpan>
      ))}
    </div>
    <S.TitleDiv>
      <h2>{title}</h2>
      <div className="note">
        <span>4.9</span>
        <img src={star} alt="" />
      </div>
    </S.TitleDiv>
    <S.Description>{description}</S.Description>
    <Link to="/loja">
      <Button>Saiba mais</Button>
    </Link>
  </S.Card>
)
export default Restaurant
