import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/order/state';
import type { MenuEntity } from '@/types/restaurant';

export const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct: ({ products }, { payload: product }: PayloadAction<MenuEntity>) => {
      const amount: number = products[product.id]?.amount || 0;
      products[product.id] = { ...product, amount: amount + 1 };
    },
    removeProduct: ({ products }, { payload: product }: PayloadAction<MenuEntity>) => {
      const amount: number = products[product.id]?.amount;
      if (amount > 1) {
        products[product.id] = { ...product, amount: amount - 1 };
      } else {
        delete products[product.id];
      }
    },
    clearProduct: ({ products }, { payload: id }: PayloadAction<string>) => {
      delete products[id];
    }
  }
});

export const { addProduct, removeProduct, clearProduct } = slice.actions;

export default slice.reducer;
