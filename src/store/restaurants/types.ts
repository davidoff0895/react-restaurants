import type { RestaurantEntity } from '@/types/restaurant';
import { LoadStatuses } from '@/consts/LoadStatuses';

export interface RestaurantsState {
  status: LoadStatuses
  list: RestaurantEntity[]
}
