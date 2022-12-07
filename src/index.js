import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_66 from './App_66';
import { BlogContextProvider_66 } from './BlogContext_66';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_66>
      <App_66 />
    </BlogContextProvider_66>
  </React.StrictMode>
);