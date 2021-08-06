import { OverviewStarElement } from './OverviewStarElement'

export const OverviewStars = ({ starsCount }) => {
  // let starCount = new Array(starsCount);
  let starCount = [];

  while (starCount.length < starsCount) {
    starCount = [...starCount, 0]
  }

  return (
    <div className="overview__stars">
      {starCount.map((_, index) => (
        <OverviewStarElement key={index} />
      ))}
    </div>
  )
}
