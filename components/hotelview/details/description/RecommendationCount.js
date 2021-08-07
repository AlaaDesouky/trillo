export const RecommendationCount = ({ userName, numberOfUsers }) => {
  return (
    <p className="recommend__count">
      {userName} and {numberOfUsers} other friends recommend this hotel.
    </p>
  )
}
