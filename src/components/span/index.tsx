import * as S from './styled'

export type Props = {
  size?: 'small' | 'big'
  children?: React.ReactNode
  page?: 'home' | 'restaurante'
}

const Tag = ({ children, size = 'small', page }: Props) => (
  <S.Span page={page} size={size}>
    {children}
  </S.Span>
)
export default Tag
