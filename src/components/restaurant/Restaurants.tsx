import { Routes, Route, Navigate } from 'react-router-dom';
import Tabs from '@/components/common/Tabs';
import Restaurant from '@/components/restaurant/Restaurant';
import { Props, RestaurantsSlice } from '@/hocs/RestaurantsSlice';

function Restaurants ({ tabs, restaurants }: Props) {
  return (
    <div>
      <Tabs tabs={tabs} />
      <Routes>
        <Route path=":id/*" element={<Restaurant />}/>
        <Route path="/" element={<Navigate to={restaurants[0].id} replace />} />
      </Routes>
    </div>
  );
}

export default RestaurantsSlice(Restaurants);
