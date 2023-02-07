import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import App from '@/App';
import reportWebVitals from '@/reportWebVitals';
import { restaurants } from '@/data/restaurants';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App restaurants={restaurants} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
