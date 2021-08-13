import { Description } from './description/Description'
import { UserReviews } from './user-reviews/UserReviews'

export const Details = () => {
  return (
    <div className="detail">
      <Description />
      <UserReviews />
    </div>
  )
}
