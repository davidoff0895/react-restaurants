import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import App from '@/App';
import reportWebVitals from '@/reportWebVitals';
import { restaurants } from '@/data/restaurants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App restaurants={restaurants} />
  </React.StrictMode>
);

reportWebVitals();
