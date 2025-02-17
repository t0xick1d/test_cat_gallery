import { configureStore } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import catReducer from './catSlice/catSlice';
import { catApi } from './catSlice/catApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const likedPersistConfig = {
   key: 'cat',
   storage,
   whitelist: ['likedCat'],
};

const persistedCatReducer = persistReducer(likedPersistConfig, catReducer);

export const store = configureStore({
   reducer: {
      cat: persistedCatReducer,
      [catApi.reducerPath]: catApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(catApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
