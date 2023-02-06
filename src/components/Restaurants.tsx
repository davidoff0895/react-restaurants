import Menu from '@/components/Menu';
import { useState } from 'react';
import type { RestaurantEntity } from '@/types/restaurant';
import Tabs from '@/components/Tabs';

interface Props {
  restaurants: RestaurantEntity[]
}

export default function Restaurants ({ restaurants }: Props) {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);
  return (
    <div>
      <Tabs tabs={restaurants} onchange={setActiveRestaurant} />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
}
