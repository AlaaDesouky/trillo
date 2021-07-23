import { HeaderLogo } from './HeaderLogo'
import { HeaderSearchInput } from './HeaderSearchInput'
import { HeaderUserNav } from './HeaderUserNav'

export const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderSearchInput />
      <HeaderUserNav />
    </header>
  )
}
