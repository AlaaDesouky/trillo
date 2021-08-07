import { List } from '../../../general-components/List'
import { Paragraph } from '../../../general-components/Paragraph'

import { Recommendation } from './Recommendation'

export const Description = () => {
  return (
    <div className="description">
      <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate." />
      <Paragraph text="Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam." />
      <List listItemsArray={["Close to the beach", "Breakdast included", "Free airport shuttle", "Free wifi in all rooms", "Air conditioning and heating", "Pets allowed", "We speak all languages", "Perfect for families"]} />
      <Recommendation />
    </div>
  )
}
