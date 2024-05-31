import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from '.'
export const Span = styled.span<Omit<Props, 'home' | 'restaurante'>>`
  line-height: 42px;
  color: ${Cores.pink};
  margin-bottom: ${(props) => (props.page === 'home' ? '40px' : '')};
  font-size: ${(props) => {
    switch (props.size) {
      case 'big':
        return 'clamp(20px, 4vw, 38px)'
      case 'small':
        return 'clamp(10px, 1.5vw, 14px)'
    }
  }};
  text-align: ${(props) => (props.page === 'home' ? 'center' : '')};
  font-weight: bold;
`
