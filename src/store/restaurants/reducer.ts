import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/restaurants/state';
import { RestaurantEntity } from '@/types/restaurant';
import { v4 as uuidv4 } from 'uuid';
import { UserReviewDto } from '@/types/user';
import { httpClient } from '@/api';
import { LoadStatuses } from '@/consts/LoadStatuses';

export const asyncGetRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (): Promise<RestaurantEntity[]> => {
    return await httpClient.get('restaurants');
  }
);

export const slice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setActiveRestaurantId: (state, { payload: restaurant }: PayloadAction<RestaurantEntity>) => {
      state.activeRestaurantId = restaurant.id;
    },
    addReview: (state, { payload: userReview }: PayloadAction<UserReviewDto>) => {
      const restaurant = state.list.find(({ id }) => id === state.activeRestaurantId)!;

      restaurant.reviews.push({
        id: uuidv4(),
        user: {
          id: uuidv4(),
          name: userReview.name
        },
        text: userReview.review,
        rating: userReview.rate
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncGetRestaurants.pending, (state) => {
        state.status = LoadStatuses.PENDING;
      })
      .addCase(asyncGetRestaurants.fulfilled, (state, { payload }) => {
        state.status = LoadStatuses.SUCCESS;
        state.list = payload;
        state.activeRestaurantId = payload[0].id;
      })
      .addCase(asyncGetRestaurants.rejected, (state) => {
        state.status = LoadStatuses.FAILED;
      });
  }
});

export const { setActiveRestaurantId, addReview } = slice.actions;

export default slice.reducer;
