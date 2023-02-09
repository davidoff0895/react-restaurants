import type { RestaurantEntity } from '@/types/restaurant';

export interface RestaurantsState {
  list: RestaurantEntity[]
  activeRestaurant: RestaurantEntity
}
