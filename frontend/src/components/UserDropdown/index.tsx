import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import Dropdown from 'components/Dropdown'
import { useAuth } from 'context/AuthContent'
import { Link } from 'react-router-dom'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => {
  const { logout } = useAuth()

  function loggout() {
    logout()
  }

  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <Link to="/profile/me">
          <S.Link>
            <AccountCircle />
            <span>My profile</span>
          </S.Link>
        </Link>

        <Link to="/" onClick={loggout}>
          <S.Link title="Sign out">
            <ExitToApp />
            <span>Sign out</span>
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
