import type { RestaurantsState } from '@/store/restaurants/types';
import { LoadStatuses } from '@/consts/LoadStatuses';

export const initialState: RestaurantsState = {
  status: LoadStatuses.NOT_INITIAL,
  list: []
};
