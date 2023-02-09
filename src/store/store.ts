import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '@/store/order/reducer';
import restaurantsReducer from '@/store/restaurants/reducer';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    restaurants: restaurantsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
