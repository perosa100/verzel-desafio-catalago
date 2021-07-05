import { Container } from 'components/Container'
import Base from 'pages/Base'
import * as S from './styles'

import { ViewModule, Class } from '@styled-icons/material-outlined'
import { useState } from 'react'

function Dashboard() {
  const [activeLink, setActiveLink] = useState('')
  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Nav>
            <S.Link
              isActive={activeLink === '/module'}
              title="Modulos"
              onClick={() => setActiveLink('/module')}
            >
              <ViewModule size={24} />
              <span>Modulos</span>
            </S.Link>

            <S.Link
              onClick={() => setActiveLink('/class')}
              isActive={activeLink === '/class'}
              title="Classes"
            >
              <Class size={24} />

              <span>Classes</span>
            </S.Link>
          </S.Nav>

          {activeLink === '/module' ? <span>module</span> : <span>class</span>}
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default Dashboard
