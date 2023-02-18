import { Routes, Route, Navigate } from 'react-router-dom';
import Restaurants from '@/components/restaurant/Restaurants';
import Header from '@/components/common/Header';

export default function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/restaurants/*" element={<Restaurants />} />
        <Route path="/" element={<Navigate to="/restaurants" replace />} />
      </Routes>
    </div>
  );
}
