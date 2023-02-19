import type { OrderState } from '@/store/order/types';
import { LoadStatuses } from '@/consts/LoadStatuses';

export const initialState: OrderState = {
  products: {},
  orderStatus: LoadStatuses.NOT_INITIAL,
  finishedOrderId: ''
};
