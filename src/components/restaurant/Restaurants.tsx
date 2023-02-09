import Tabs from '@/components/common/Tabs';
import Restaurant from '@/components/restaurant/Restaurant';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setActiveRestaurant } from '@/store/restaurants/reducer';
import { RestaurantEntity } from '@/types/restaurant';

export default function Restaurants () {
  const { list: restaurants, activeRestaurant } = useSelector(({ restaurants }: RootState) => restaurants);
  const dispatch = useDispatch();
  const changeTab = (restaurant: RestaurantEntity) => dispatch(setActiveRestaurant(restaurant));
  return (
    <div>
      <Tabs tabs={restaurants} activeTab={activeRestaurant} onchange={changeTab} />
      <Restaurant />
    </div>
  );
}
