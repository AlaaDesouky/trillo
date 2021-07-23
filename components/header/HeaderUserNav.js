export const HeaderUserNav = () => {
  return (
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="./sprite.svg#icon-bookmark"></use>
        </svg>
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref="./sprite.svg#icon-chat"></use>
        </svg>
        <span className="user-nav__notification">13</span>
      </div>
      <div className="user-nav__user">
        <img src="./me.jpg" alt="User photo" className="user-nav__user-photo" />
        <span className="user-nav__user-name">Desouky</span>
      </div>
    </nav>
  )
}
