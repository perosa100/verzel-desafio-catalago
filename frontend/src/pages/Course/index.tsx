import { Container } from 'components/Container'
import ModuleCard from 'components/ModuleCard'
import Base from 'pages/Base'
import { useEffect, useState } from 'react'
import * as S from './styles'
import api from './../../services/api'
import { PlayMini as Play } from '@styled-icons/remix-fill/PlayMini'
import ClassCard from 'components/ClassCard'

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

          <S.ContentFooter>
            <Play size={90} color="#9cf27f" />
            <S.ContentFooterTop>
              <S.Title>React</S.Title>
              <S.Subtitle>Todas as aulas disponíveis nesse módulo:</S.Subtitle>
            </S.ContentFooterTop>
          </S.ContentFooter>

          <S.Filter>
            {modules.map((module: any) => (
              <S.FilterItem>{module.nome}</S.FilterItem>
            ))}
          </S.Filter>

          <S.ContentMain>
            <ClassCard />
            <ClassCard />
            <ClassCard />
          </S.ContentMain>
        </S.Wrapper>
      </Container>
    </Base>
  )
}

export default Course
