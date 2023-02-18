import type { MenuEntity } from '@/types/restaurant';

type IOrder = Record<string, MenuEntity & { amount: number, restaurantId: string }>;

export interface OrderState {
  products: IOrder
}
