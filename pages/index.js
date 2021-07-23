import { Container } from '../components/Container'
import { HEAD } from '../components/Head'

import { Header } from '../components/header/Header'

export default function Home() {
  return (
    <>
      <HEAD />
      <Container>
        <Header />
      </Container>
    </>
  )
}