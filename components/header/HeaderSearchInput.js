export const HeaderSearchInput = () => {
  return (
    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="Search hotels" />
      <button className="search__button">
        <svg className="search__icon">
          <use xlinkHref="./sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </form>
  )
}
