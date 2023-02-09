import Tabs from '@/components/common/Tabs';
import Restaurant from '@/components/restaurant/Restaurant';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setActiveRestaurantId } from '@/store/restaurants/reducer';
import { RestaurantEntity } from '@/types/restaurant';
import { activeRestaurant } from '@/store/restaurants/selector';

export default function Restaurants () {
  const { list: restaurants } = useSelector(({ restaurants }: RootState) => restaurants);
  const restaurant = useSelector(activeRestaurant);
  const dispatch = useDispatch();
  const changeTab = (restaurant: RestaurantEntity) => dispatch(setActiveRestaurantId(restaurant));
  return (
    <div>
      <Tabs tabs={restaurants} activeTab={restaurant} onchange={changeTab} />
      <Restaurant />
    </div>
  );
}
