import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import { store } from './redux-store/store.ts';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter basename="/search">
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
);
