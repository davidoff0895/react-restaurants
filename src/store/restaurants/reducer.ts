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
    addReview: (state, { payload }: PayloadAction<{
      userReview: UserReviewDto
      restaurantId: string
    }>) => {
      const restaurant = state.list.find(({ id }) => id === payload.restaurantId)!;

      restaurant.reviews.push({
        id: uuidv4(),
        user: {
          id: uuidv4(),
          name: payload.userReview.name
        },
        text: payload.userReview.review,
        rating: payload.userReview.rate
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
      })
      .addCase(asyncGetRestaurants.rejected, (state) => {
        state.status = LoadStatuses.FAILED;
      });
  }
});

export const { addReview } = slice.actions;

export default slice.reducer;
