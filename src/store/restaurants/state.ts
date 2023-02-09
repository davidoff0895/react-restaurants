import type { RestaurantsState } from '@/store/restaurants/types';
import { restaurants } from '@/data/restaurants';

export const initialState: RestaurantsState = {
  list: restaurants,
  activeRestaurant: restaurants[0]
};
