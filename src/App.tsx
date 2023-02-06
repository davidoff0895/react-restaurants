import React from 'react';
import Restaurants from '@/components/Restaurants';
import type { RestaurantEntity } from '@/types/restaurant';
import Header from '@/components/common/Header';

interface Props {
  restaurants: RestaurantEntity[]
}

export default function App ({ restaurants }: Props) {
  return (
    <div className="app">
      <Header />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
