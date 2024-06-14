import { styled } from 'styled-components'
import { Props } from '.'
import bannerImg from '../../assets/img/Vector.png'
import { breakpoints, colors } from '../../styles'

export const SpanDesktop = styled.span`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.backgroundColor};
  text-decoration: none;
  cursor: pointer;
`

export const SpanMobile = styled(SpanDesktop)`
  display: none;
`

export const EfoodLogo = styled.img`
  width: 124px;
  height: 57px;
`
export const ProfileHeader = styled.div`
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-around;
    padding: 16px 20px 0;
    ${EfoodLogo} {
      margin-bottom: 4px;
      order: -1;
    }

    ${SpanDesktop} {
      display: none;
    }
    ${SpanMobile} {
      display: flex;
      align-items: center;
      small {
        margin-right: 8px;
        font-size: 18px;
      }
    }
  }

  a {
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: ${colors.backgroundColor};
    text-decoration: none;
    @media (max-width: ${breakpoints.mobile}) {
      text-align: center;
    }
  }
`

export const HeaderContainer = styled.header<Props>`
  background-size: cover;
  background-image: url(${bannerImg});
  width: 100%;
  height: ${(props) =>
    props.$isprofilepage === 'profile' ? '186px' : '384px'};
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 1024px;
    width: 100%;
  }
`

export const HomeHeader = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
  img {
    margin-top: 64px;
  }
`

export const SpanHome = styled.span`
  margin-bottom: 40px;
  font-weight: 900;
  font-size: clamp(16px, 4.235vw, 32px);
  line-height: 42px;
  color: ${colors.backgroundColor};
  text-align: center;
`
