import { Details } from './details/Details'
import { Gallery } from './gallery/Gallery'
import { Overview } from './overview/Overview'
import { Cta } from './Cta'

export const HotelView = () => {
  return (
    <main className="hotel-view">
      <Gallery />
      <Overview />
      <Details />
      <Cta />
    </main>
  )
}
