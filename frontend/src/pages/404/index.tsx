import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'pages/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not found"
          description="Parece que a página que você tentou acessar não existe mais..."
          hasLink
        />
      </Container>
    </Base>
  )
}
