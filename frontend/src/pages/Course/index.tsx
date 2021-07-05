import { Container } from 'components/Container'
import ModuleCard, { ModuleCardProps } from 'components/ModuleCard'
import Base from 'pages/Base'
import { useEffect, useState } from 'react'
import * as S from './styles'
import api from './../../services/api'

function Course() {
  const [modules, setModules] = useState([])

  useEffect(() => {
    async function loadModules() {
      const response = await api.get('/module')
      setModules(response.data.modules)
    }
    loadModules()
  }, [])
  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.ContentHeader>
            <S.Title>Módulos</S.Title>
            <S.Subtitle>
              Selecione o módulo para ver as aulas disponíveis:
            </S.Subtitle>
          </S.ContentHeader>
          <S.ContentMain>
            {modules.map((module) => (
              <ModuleCard module={module} />
            ))}
          </S.ContentMain>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default Course
