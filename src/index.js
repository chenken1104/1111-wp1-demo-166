import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_66 from './App_66';
import { MenuContextProvider } from './MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuContextProvider>
    <App_66 />
    </MenuContextProvider>
  </React.StrictMode>
);

