import { styled } from 'styled-components'
import { Props } from '.'
import bannerImg from '../../assets/img/Vector.png'
import { Cores } from '../../styles'

export const HeaderContainer = styled.header<Props>`
  background-size: cover;
  background-image: url(${bannerImg});
  width: 100%;
  height: ${(props) => (props.isprofilepage === 'profile' ? '186px' : '384px')};
`
export const EfoodLogo = styled.img`
  width: 124px;
  height: 57px;
`
export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 64px;

  button {
    background-color: ${Cores.footer};
    width: 256px;
  }

  a {
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    color: ${Cores.pink};
    text-decoration: none;
  }
`

export const SpanProfile = styled.span`
  font-weight: 900;
  font-size: 18px;
  width: 100%;
  line-height: 21px;
  color: ${Cores.pink};
  text-decoration: none;
`

export const HomeHeader = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    margin-top: 64px;
  }
`

export const SpanHome = styled.span`
  margin-bottom: 40px;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${Cores.pink};
  text-align: center;
`
