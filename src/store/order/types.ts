import type { MenuEntity } from '@/types/restaurant';
import { LoadStatuses } from '@/consts/LoadStatuses';

export type IOrder = Record<string, MenuEntity & { amount: number, restaurantId: string }>;

export interface OrderState {
  products: IOrder
  orderStatus: LoadStatuses
  finishedOrderId: string
}
