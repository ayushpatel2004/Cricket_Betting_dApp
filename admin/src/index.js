import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import { WrapperProvider } from './context/wrappercontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WrapperProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </WrapperProvider>,
);


