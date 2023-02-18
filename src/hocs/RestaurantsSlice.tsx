import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { LoadStatuses } from '@/consts/LoadStatuses';
import { asyncGetRestaurants } from '@/store/restaurants/reducer';
import Loader from '@/components/common/Loader';
import { RestaurantEntity } from '@/types/restaurant';
import { useParams } from 'react-router-dom';

interface Tab {
  label: string
  url: string
}

export interface Props {
  tabs: Tab[]
  restaurants: RestaurantEntity[]
}

export function RestaurantsSlice (WrappedComponent: React.ComponentType<Props>) {
  const Slice = () => {
    useEffect(() => {
      void dispatch(asyncGetRestaurants());
    }, []);

    const { '*': urlPath } = useParams();

    const dispatch = useAppDispatch();

    const loadStatus = useAppSelector(({ restaurants }) => restaurants.status);
    const { list: restaurants } = useAppSelector(({ restaurants }) => restaurants);

    const isLoadedRestaurants = useMemo(() => loadStatus === LoadStatuses.SUCCESS, [loadStatus]);
    const tabs = useMemo(() => {
      const [, section] = urlPath!.split('/');
      return restaurants.map(({ id, name }) => ({
        label: name,
        url: `/restaurants/${id}/${section}`
      }));
    }, [restaurants, urlPath]);

    return isLoadedRestaurants
      ? <WrappedComponent
            tabs={tabs}
            restaurants={restaurants}
        />
      : <Loader />;
  };
  Slice.displayName = 'RestaurantsSlice';

  return Slice;
}
