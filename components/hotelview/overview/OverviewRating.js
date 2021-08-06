export const OverviewRating = ({ rating, numberOfVotes }) => {
  return (
    <div className="overview__rating">
      <div className="overview__rating-average">{rating}</div>
      <div className="overview__rating-count">{numberOfVotes} votes</div>
    </div>
  )
}
