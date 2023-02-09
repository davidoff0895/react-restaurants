import type { RestaurantsState } from '@/store/restaurants/types';
import { restaurants } from '@/data/restaurants';

export const initialState: RestaurantsState = {
  list: restaurants,
  activeRestaurantId: restaurants[0].id
};
