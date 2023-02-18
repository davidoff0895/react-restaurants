import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { RestaurantEntity } from '@/types/restaurant';

export default function getActiveRestaurant (): RestaurantEntity {
  const restaurants = useAppSelector(({ restaurants }) => restaurants.list);
  const { id: activeRestaurantId } = useParams();

  return activeRestaurantId ? restaurants.find(({ id }) => id === activeRestaurantId)! : restaurants[0];
}
