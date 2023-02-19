import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/order/state';
import type { ProductEntity } from '@/types/restaurant';
import { httpClient } from '@/api';
import { IOrder } from '@/store/order/types';
import { LoadStatuses } from '@/consts/LoadStatuses';
import { v4 as uuidv4 } from 'uuid';

export const asyncSendOrder = createAsyncThunk(
  'order/sendOrder',
  async (order: IOrder) => {
    const data = Object.values(order)
      .map(({ id, amount, restaurantId }) => ({ id, amount, restaurantId }));
    return await httpClient.post('order', data);
  }
);

export const slice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct: ({ products }, { payload: product }: PayloadAction<ProductEntity>) => {
      const amount: number = products[product.id]?.amount || 0;
      products[product.id] = { ...product, amount: amount + 1 };
    },
    removeProduct: ({ products }, { payload: product }: PayloadAction<ProductEntity>) => {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncSendOrder.pending, (state) => {
        state.orderStatus = LoadStatuses.PENDING;
      })
      .addCase(asyncSendOrder.fulfilled, (state) => {
        state.orderStatus = LoadStatuses.SUCCESS;
        state.products = {};
        state.finishedOrderId = uuidv4();
      })
      .addCase(asyncSendOrder.rejected, (state) => {
        state.orderStatus = LoadStatuses.FAILED;
      });
  }
});

export const { addProduct, removeProduct, clearProduct } = slice.actions;

export default slice.reducer;
