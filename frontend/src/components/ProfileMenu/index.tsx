import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'
import { Link } from 'react-router-dom'
import { useAuth } from 'context/AuthContent'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/dashboard' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { logout } = useAuth()

  function loggout() {
    logout()
  }

  return (
    <S.Nav>
      <Link to="/profile/me">
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>Meu Perfil</span>
        </S.Link>
      </Link>

      <Link to="/profile/orders">
        <S.Link isActive={activeLink === '/profile/orders'} title="Courses">
          <FormatListBulleted size={24} />
          <span>Meus Cursos</span>
        </S.Link>
      </Link>

      <Link to="/" onClick={loggout}>
        <S.Link>
          <ExitToApp size={24} />
          <span>Sair</span>
        </S.Link>
      </Link>
    </S.Nav>
  )
}
export default ProfileMenu
