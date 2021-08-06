export const OverviewLocation = ({ city, country }) => {
  return (
    <div className="overview__location">
      <svg className="overview__icon-location">
        <use xlinkHref="./sprite.svg#icon-location-pin"></use>
      </svg>
      <button className="btn-inline">{city}, {country}</button>
    </div>
  )
}
