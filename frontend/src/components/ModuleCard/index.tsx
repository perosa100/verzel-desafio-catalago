import Button from 'components/Button'
import { Link } from 'react-router-dom'

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
      <S.Title>{module.nome}</S.Title>
    ) : (
      <S.Title>Carregando...</S.Title>
    )}
  </S.Wrapper>
)

export default ModuleCard
