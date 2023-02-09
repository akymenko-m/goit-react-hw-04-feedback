import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App.jsx';
import 'modern-normalize/modern-normalize.css';
import { Global } from '@emotion/react';
import { GlobalStyles } from './styles/GlobalStyle';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>
);
