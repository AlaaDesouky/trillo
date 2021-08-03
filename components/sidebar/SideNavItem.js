export const SideNavItem = ({ itemName, iconName, isActive = false }) => {
  return (
    <li className={`side-nav__item ${isActive ? 'side-nav__item--active' : ''}`}>
      <a href="#" className="side-nav__link">
        <svg className="side-nav__icon">
          <use xlinkHref={`./sprite.svg#icon-${iconName}`}></use>
        </svg>
        <span>{itemName}</span>
      </a>
    </li>
  )
}
