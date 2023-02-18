import React, { ChangeEvent, useState } from 'react';
import { addReview } from '@/store/restaurants/reducer';
import { UserReviewDto } from '@/types/user';
import { useAppDispatch } from '@/store/hooks';
import getActiveRestaurant from '@/hoocs/activeRestaurant';

export interface Props {
  user: UserReviewDto
  inputName: (e: ChangeEvent<HTMLInputElement>) => void
  inputReview: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onRate: (value: number) => void
  submit: () => void
}

export function ReviewFormSlice (WrappedComponent: React.ComponentType<Props>) {
  const Slice = () => {
    const dispatch = useAppDispatch();
    const { id: restId } = getActiveRestaurant();

    const [user, setUser] = useState({
      name: '',
      review: '',
      rate: 0
    });
    const inputName = ({ target }: ChangeEvent<HTMLInputElement>) => { setUser({ ...user, name: target.value }); };
    const inputReview = ({ target }: ChangeEvent<HTMLTextAreaElement>) => { setUser({ ...user, review: target.value }); };
    const onRate = (value: number) => { setUser({ ...user, rate: value }); };
    const submit = () => {
      if (user.name) {
        dispatch(addReview({ userReview: user, restaurantId: restId }));
        setUser({
          name: '',
          review: '',
          rate: 0
        });
      }
    };

    return <WrappedComponent
        user={user}
        inputName={inputName}
        inputReview={inputReview}
        onRate={onRate}
        submit={submit}
    />;
  };
  Slice.displayName = 'ReviewFormSlice';

  return Slice;
}
