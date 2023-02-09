import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '@/store/restaurants/reducer';
import { UserReviewDto } from '@/types/user';

export interface Props {
  user: UserReviewDto
  inputName: (e: ChangeEvent<HTMLInputElement>) => void
  inputReview: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onRate: (value: number) => void
  submit: () => void
}

export function ReviewFormSlice (WrappedComponent: React.ComponentType<Props>) {
  const Slice = () => {
    const dispatch = useDispatch();

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
        dispatch(addReview(user));
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
  Slice.displayName = 'ProductSlice';

  return Slice;
}
