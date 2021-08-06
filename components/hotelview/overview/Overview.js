import { OverviewHeading } from './OverviewHeading'
import { OverviewLocation } from './OverviewLocation'
import { OverviewRating } from './OverviewRating'
import { OverviewStars } from './OverviewStars'

export const Overview = () => {
  return (
    <div className="overview">
      <OverviewHeading title="Hotel Las Palmas" />
      <OverviewStars starsCount={5} />
      <OverviewLocation city="Albufeira" country="Portugal" />
      <OverviewRating rating="8.6" numberOfVotes="429" />
    </div>
  )
}
