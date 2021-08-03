import { Container } from '../components/Container'
import { Content } from '../components/Content'
import { HEAD } from '../components/Head'

import { Header } from '../components/header/Header'
import { Sidebar } from '../components/sidebar/Sidebar'

export default function Home() {
  return (
    <>
      <HEAD />
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <div>
            HotelView
          </div>
        </Content>
      </Container>
    </>
  )
}