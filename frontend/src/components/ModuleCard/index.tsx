import { PlayMini as Play } from '@styled-icons/remix-fill/PlayMini'

import * as S from './styles'

export type ModuleCardProps = {
  module: {
    countClasses: number
    id: string
    nome: string
    classe: {
      id: string
      nome: string
      modulo: string
      dateClass: string
    }[]
  }
}

const ModuleCard = ({ module }: ModuleCardProps) => (
  <S.Wrapper>
    {module ? (
      <S.Card>
        <Play size={50} color="#9cf27f" />
        <S.ContentCard>
          <S.Title>{module.nome}</S.Title>
          <S.Quantity>
            {module.countClasses}/{module.countClasses} aulas
          </S.Quantity>
        </S.ContentCard>
      </S.Card>
    ) : (
      <S.Title>Carregando...</S.Title>
    )}
  </S.Wrapper>
)

export default ModuleCard
