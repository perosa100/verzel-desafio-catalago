import { PlayMini as Play } from '@styled-icons/remix-fill/PlayMini'

import * as S from './styles'

export type ClassCardProps = {
  class: {
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

const ClassCard = () => (
  <S.Wrapper>
    {module ? (
      <S.Card>
        <S.HeaderContent>
          <S.Title>React</S.Title>
          <S.Quantity>1/1</S.Quantity>{' '}
        </S.HeaderContent>

        <S.MainContent>
          <Play size={50} color="#9cf27f" />
        </S.MainContent>

        <S.Quantity>Titulo</S.Quantity>

        <S.FooterContent>
          <S.Title>Duração</S.Title>
          <S.Quantity>20min</S.Quantity>
        </S.FooterContent>
        <button>Assistir aula</button>
      </S.Card>
    ) : (
      <S.Title>Carregando...</S.Title>
    )}
  </S.Wrapper>
)

export default ClassCard
