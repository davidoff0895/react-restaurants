import type { MenuEntity } from '@/types/restaurant';

type IOrder = Record<string, MenuEntity & { amount: number }>;

export interface OrderState {
  products: IOrder
}
