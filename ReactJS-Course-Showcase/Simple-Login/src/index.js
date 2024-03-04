import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './context/auth-context';

import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
