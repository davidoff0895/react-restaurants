import type { RestaurantEntity } from '@/types/restaurant';

interface Props {
  tabs: RestaurantEntity[]
  onchange: (restaurant: RestaurantEntity) => void
}

export default function Tabs ({ tabs, onchange }: Props) {
  return (
    <div>
      {tabs.map((restaurant) =>
        <button key={restaurant.id} onClick={() => { onchange(restaurant); }}>{restaurant.name}</button>
      )}
    </div>
  );
}
