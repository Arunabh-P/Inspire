import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filterContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </AppProvider>
);
