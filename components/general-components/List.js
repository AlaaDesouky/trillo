import { ListItem } from './ListItem'

export const List = ({ listItemsArray = [] }) => {
  return (
    <ul className="list">
      {listItemsArray.map((e, index) => (
        <ListItem listItemText={e} key={index} />
      ))}
    </ul>
  )
}
