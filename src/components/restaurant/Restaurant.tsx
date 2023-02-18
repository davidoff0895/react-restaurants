import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from '@/components/Menu';
import Reviews from '@/components/review/Reviews';
import Rate from '@/components/common/Rate';
import Banner from '@/components/common/Banner';
import { RestaurantSlice, Props } from '@/hocs/RestaurantSlice';
import Tabs from '@/components/common/Tabs';

function Restaurant ({ restaurant, averageRate, tabs }: Props) {
  return (
    <div>
      <Banner heading={restaurant.name}>
        <Rate value={averageRate}/>
      </Banner>
      <Tabs tabs={tabs} />
      <Routes>
        <Route path="menu" element={<Menu />}/>
        <Route path="reviews" element={<Reviews />}/>
        <Route path="/" element={<Navigate to="menu" replace />} />
      </Routes>
    </div>
  );
}

export default RestaurantSlice(Restaurant);
