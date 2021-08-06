import { Container } from '../components/Container'
import { Content } from '../components/Content'
import { HEAD } from '../components/Head'

import { Header } from '../components/header/Header'
import { HotelView } from '../components/hotelview/HotelView'
import { Sidebar } from '../components/sidebar/Sidebar'

export default function Home() {
  return (
    <>
      <HEAD />
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <HotelView />
        </Content>
      </Container>
    </>
  )
}