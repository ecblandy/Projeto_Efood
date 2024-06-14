import { Link } from 'react-router-dom'
// COMPONENTS
import Button from '../button'
// UTILS
import * as S from './styled'
import star from '../../assets/img/estrela.png'

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
      <div>
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
          <Button type="button">Saiba mais</Button>
        </Link>
      </div>
    </S.Card>
  )
}
export default Restaurant
