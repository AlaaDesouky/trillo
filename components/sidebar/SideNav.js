import { SideNavItem } from './SideNavItem'

export const SideNav = () => {
  return (
    <ul className="side-nav">
      <SideNavItem itemName={'Hotel'} iconName={'home'} isActive={true} />
      <SideNavItem itemName={'Flight'} iconName={'aircraft-take-off'} />
      <SideNavItem itemName={'Car rental'} iconName={'key'} />
      <SideNavItem itemName={'Tours'} iconName={'map'} />
    </ul>
  )
}
