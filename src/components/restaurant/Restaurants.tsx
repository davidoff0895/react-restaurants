import Tabs from '@/components/common/Tabs';
import Restaurant from '@/components/restaurant/Restaurant';
import { setActiveRestaurantId } from '@/store/restaurants/reducer';
import { RestaurantEntity } from '@/types/restaurant';
import { activeRestaurant } from '@/store/restaurants/selector';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function Restaurants () {
  const dispatch = useAppDispatch();
  const { list: restaurants } = useAppSelector(({ restaurants }) => restaurants);
  const restaurant = useAppSelector(activeRestaurant);
  const changeTab = (restaurant: RestaurantEntity) => dispatch(setActiveRestaurantId(restaurant));
  return (
    <div>
      <Tabs tabs={restaurants} activeTab={restaurant} onchange={changeTab} />
      <Restaurant />
    </div>
  );
}
