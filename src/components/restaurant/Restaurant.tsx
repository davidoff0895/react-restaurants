import Menu from '@/components/Menu';
import Reviews from '@/components/review/Reviews';
import Rate from '@/components/common/Rate';
import Banner from '@/components/common/Banner';
import { useMemo, useState } from 'react';
import Tabs from '@/components/common/Tabs';
import { useSelector } from 'react-redux';
import { activeRestaurant } from '@/store/restaurants/selector';

export default function Restaurant () {
  const restaurant = useSelector(activeRestaurant);
  const averageRate = useMemo(() => {
    const rateSum = restaurant.reviews.reduce((sum, { rating }) => sum + rating, 0);
    return Math.round(rateSum / restaurant.reviews.length);
  }, [restaurant.reviews]);
  const tabs = [{ id: '1', name: 'Menu' }, { id: '2', name: 'Reviews' }];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <Banner heading={restaurant.name}>
        <Rate value={averageRate}/>
      </Banner>
      <Tabs tabs={tabs} activeTab={activeTab} onchange={setActiveTab}/>
      {activeTab.name === 'Menu' ? <Menu /> : <Reviews key={restaurant.id} />}
    </div>
  );
}