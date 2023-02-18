import React, { useMemo } from 'react';
import { RestaurantEntity } from '@/types/restaurant';
import getActiveRestaurant from '@/hoocs/activeRestaurant';

interface Tab {
  label: string
  url: string
}

export interface Props {
  restaurant: RestaurantEntity
  averageRate: number
  tabs: Tab[]
}

export function RestaurantSlice (WrappedComponent: React.ComponentType<Props>) {
  const Slice = () => {
    const restaurant = getActiveRestaurant();

    const tabs = [{ url: 'menu', label: 'Menu' }, { url: 'reviews', label: 'Reviews' }];
    const averageRate = useMemo(() => {
      const rateSum = restaurant.reviews.reduce((sum, { rating }) => sum + rating, 0);
      return Math.round(rateSum / restaurant.reviews.length);
    }, [restaurant.reviews]);

    return <WrappedComponent
            restaurant={restaurant}
            averageRate={averageRate}
            tabs={tabs}
    />;
  };
  Slice.displayName = 'RestaurantSlice';

  return Slice;
}
