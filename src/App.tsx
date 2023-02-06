import React from 'react';
import '@/App.css';
import Restaurants from '@/components/Restaurants';
import type { RestaurantEntity } from '@/types/restaurant';

interface Props {
  restaurants: RestaurantEntity[]
}

export default function App ({ restaurants }: Props) {
  return (
    <div className="App">
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
