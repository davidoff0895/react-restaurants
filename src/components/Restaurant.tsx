import type { RestaurantEntity } from '@/types/restaurant';
import Menu from '@/components/Menu';
import Reviews from '@/components/Reviews';
import Rate from '@/components/Rate';

interface Props {
  restaurant: RestaurantEntity
}

export default function Restaurant ({ restaurant }: Props) {
  const averageRate = restaurant.reviews.reduce((sum, { rating }) => sum + rating, 0) / restaurant.reviews.length;
  return (
    <div>
      <Rate value={averageRate} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
