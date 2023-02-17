import React, { useEffect, useMemo } from 'react';
import Restaurants from '@/components/restaurant/Restaurants';
import Header from '@/components/common/Header';
import { asyncGetRestaurants } from '@/store/restaurants/reducer';
import { LoadStatuses } from '@/consts/LoadStatuses';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Loader from '@/components/common/Loader';

export default function App () {
  const dispatch = useAppDispatch();
  const loadStatus = useAppSelector(({ restaurants }) => restaurants.status);
  const isLoadedRestaurants = useMemo(() => loadStatus === LoadStatuses.SUCCESS, [loadStatus]);
  useEffect(() => {
    void dispatch(asyncGetRestaurants());
  }, []);
  return (
    <div>
      <Header />
      {loadStatus === LoadStatuses.PENDING && <Loader />}
      {isLoadedRestaurants && <Restaurants />}
    </div>
  );
}
