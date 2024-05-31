import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  height: 400px;
  border: 1px solid ${Cores.pink};
  margin-right: 80px;
  margin-bottom: 48px;
  position: relative;
  img {
    height: 217px;
  }

  .infos {
    position: absolute;
    top: 15px;
    right: 16px;
  }
`

export const CardSpan = styled.span`
  font-size: 14px;
  background-color: ${Cores.pink};
  color: ${Cores.body};
  padding: 6px 4px;
  margin-left: 8px;
`

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;

  h2,
  div > span {
    font-weight: 700;
    font-size: 18px; /* Ajuste dinâmico do tamanho da fonte */
    color: ${Cores.pink};
  }

  .note {
    display: flex;
    align-items: center;

    img {
      height: 20px;
    }
    span {
      margin-right: 8px;
    }
  }
`

export const Description = styled.p`
  font-size: 14px; /* Ajuste dinâmico do tamanho da fonte */
  color: ${Cores.pink};
  line-height: 20px;
  font-weight: 400;
  padding: 8px;
`
