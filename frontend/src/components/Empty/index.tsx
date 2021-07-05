import Button from 'components/Button'
import { Link } from 'react-router-dom'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image src="/images/fail.png" alt="Working page " role="image" />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link to="/">
        <Button as="a">Volte para a Home</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
