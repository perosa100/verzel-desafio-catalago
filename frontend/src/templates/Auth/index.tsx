import Heading from 'components/Heading'
import Logo from 'components/Logo'
import { Link } from 'react-router-dom'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link to="/">
          <Logo id="banner" colorLogo />
        </Link>
        <div>
          <Heading size="huge">Uma plataforma completa.</Heading>
          <S.SubTitle>
            <strong>devaria</strong> onde programadores são forjados.
          </S.SubTitle>
        </div>

        <S.Footer>Patrick Perosa. 2021</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link to="/">
          <Logo id="Content" color="black" size="large" />
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
