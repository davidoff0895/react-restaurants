import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/restaurants/state';
import { RestaurantEntity } from '@/types/restaurant';
import { v4 as uuidv4 } from 'uuid';
import { UserReviewDto } from '@/types/user';

export const slice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setActiveRestaurant: (state, { payload: restaurant }: PayloadAction<RestaurantEntity>) => {
      state.activeRestaurant = restaurant;
    },
    addReview: (state, { payload: userReview }: PayloadAction<UserReviewDto>) => {
      // to keep added review between restaurant tabs
      const activeRestaurantIndex = state.list.findIndex(({ id }) => id === state.activeRestaurant.id);
      state.list[activeRestaurantIndex] = state.activeRestaurant;

      state.activeRestaurant.reviews.push({
        id: uuidv4(),
        user: {
          id: uuidv4(),
          name: userReview.name
        },
        text: userReview.review,
        rating: userReview.rate
      });
    }
  }
});

export const { setActiveRestaurant, addReview } = slice.actions;

export default slice.reducer;
