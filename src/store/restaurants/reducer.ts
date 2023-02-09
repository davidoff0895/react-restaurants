import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '@/store/restaurants/state';
import { RestaurantEntity } from '@/types/restaurant';
import { v4 as uuidv4 } from 'uuid';
import { UserReviewDto } from '@/types/user';

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
  }
});

export const { setActiveRestaurantId, addReview } = slice.actions;

export default slice.reducer;
