import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import UserDropdown from 'components/UserDropdown'
import { Link } from 'react-router-dom'

import { useState } from 'react'

import * as S from './styles'
import { useAuth } from 'context/AuthContent'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const { user } = useAuth()

  const [isOpen, setIsOpen] = useState(false)
  var permission = []

  if (user) {
    permission = user.roles.map((role) => role.name === 'ROLE_ADMIN')
  }

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link to="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink as={Link} to="/">
            Home
          </S.MenuLink>
          <S.MenuLink as={Link} to="/cursos">
            Explore as Aulas
          </S.MenuLink>
          {permission?.length > 0 && (
            <S.MenuLink as={Link} to="/dashboard">
              Cadastro de cursos
            </S.MenuLink>
          )}
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link to="/sign-in">
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink as={Link} to="/">
            Home
          </S.MenuLink>
          <S.MenuLink as={Link} to="/cursos">
            Explore as Aulas
          </S.MenuLink>
          {permission?.length > 0 && (
            <S.MenuLink as={Link} to="/dashboard">
              Cadastro de cursos
            </S.MenuLink>
          )}

          {!!username && (
            <>
              <S.MenuLink as={Link} to="/profile/me">
                My profile
              </S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link to="/sign-in">
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <S.CreateAccount as={Link} to="sign-up" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
