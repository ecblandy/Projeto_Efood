import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { EfoodLogo } from '../header/styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.footer};
  width: 100%;
  height: 298px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const EFoodLogoFooter = styled(EfoodLogo)`
  margin-bottom: 32px;
  margin-top: 40px;
`
export const BrandContainer = styled.ul`
  margin-bottom: 50px;
  display: flex;
  li img {
    margin-right: 8px;
    height: 24px;
  }
`

export const TextFooter = styled.p`
  color: ${colors.backgroundColor};
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 20px 40px;
  }
`
