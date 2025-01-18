import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx';
import { store, persistor } from './redux-store/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <BrowserRouter basename="/">
               <App />
            </BrowserRouter>
         </PersistGate>
      </Provider>
   </React.StrictMode>,
);
