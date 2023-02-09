import { RootState } from '@/store/store';
import { RestaurantEntity } from '@/types/restaurant';

export const activeRestaurant = ({ restaurants }: RootState): RestaurantEntity => {
  return restaurants.list.find(({ id }) => id === restaurants.activeRestaurantId)!;
};
