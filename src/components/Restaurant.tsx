import type { RestaurantEntity } from '@/types/restaurant';
import Menu from '@/components/Menu';
import Reviews from '@/components/Reviews';
import Rate from '@/components/Rate';
import Banner from '@/components/common/Banner';
import { useMemo } from 'react';

interface Props {
  restaurant: RestaurantEntity
}

export default function Restaurant ({ restaurant }: Props) {
  const averageRate = useMemo(() => {
    const rateSum = restaurant.reviews.reduce((sum, { rating }) => sum + rating, 0);
    return Math.round(rateSum / restaurant.reviews.length);
  }, [restaurant.reviews]);
  return (
    <div>
      <Banner heading={restaurant.name}>
        <Rate value={averageRate}/>
      </Banner>
      <Menu menu={restaurant.menu}/>
      <Reviews reviews={restaurant.reviews}/>
    </div>
  );
}
