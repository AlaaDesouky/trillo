export const ListItem = ({ listItemText }) => {
  return (
    <li className="list__item">
      <svg className="list__item-icon">
        <use xlinkHref="./sprite.svg#icon-chevron-thin-right"></use>
      </svg>
      {listItemText}
    </li>
  )
}
