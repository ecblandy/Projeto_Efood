// import Tag from '../span'
import * as S from './styled'
import Button from '../button'
import star from '../../assets/img/estrela.png'
import { Link } from 'react-router-dom'
type Props = {
  image: string
  titulo: string
  type: string
  descricao: string
  id: number
  avaliacao: number
}
const Restaurant = ({ titulo, image, descricao, type, avaliacao }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={image} alt="" />
      <div className="infos">
        <S.CardSpan>{type}</S.CardSpan>
      </div>
      <S.TitleDiv>
        <h2>{titulo}</h2>
        <div className="note">
          <span>{avaliacao}</span>
          <img src={star} alt="" />
        </div>
      </S.TitleDiv>
      <S.Description>{getDescricao(descricao)}</S.Description>
      <Link to="/loja">
        <Button>Saiba mais</Button>
      </Link>
    </S.Card>
  )
}
export default Restaurant
