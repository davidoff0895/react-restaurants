import { Routes, Route, Navigate } from 'react-router-dom';
import Restaurants from '@/components/restaurant/Restaurants';
import Header from '@/components/common/Header';
import OrderSuccess from '@/views/OrderSuccess';

export default function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/restaurants/*" element={<Restaurants />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/" element={<Navigate to="/restaurants" replace />} />
      </Routes>
    </div>
  );
}
