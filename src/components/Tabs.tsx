import type { RestaurantEntity } from '@/types/restaurant';
import styles from '@/assets/scss/tabs.module.scss';

interface Props {
  tabs: RestaurantEntity[]
  onchange: (restaurant: RestaurantEntity) => void
}

export default function Tabs ({ tabs, onchange }: Props) {
  return (
    <div className={styles.tabs}>
      {tabs.map((restaurant) =>
        <span
            key={restaurant.id}
            onClick={() => { onchange(restaurant); }}
            className={styles.tab}
        >
          {restaurant.name}
        </span>
      )}
    </div>
  );
}
