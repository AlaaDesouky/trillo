import { RecommendationCount } from './RecommendationCount'
import { RecommendationFriends } from './RecommendationFriends'

export const Recommendation = () => {
  return (
    <div className="recommend">
      <RecommendationCount userName="Lucy" numberOfUsers={3} />
      <RecommendationFriends />
    </div>
  )
}
