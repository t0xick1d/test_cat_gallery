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
import catReducer from './catSlice/catSlice.ts';
import { catApi } from './catSlice/catApi.ts';
import { setupListeners } from '@reduxjs/toolkit/query';

const likedPersistConfig = {
   key: 'cat',
   storage,
   whitelist: ['likedCat'],
};

export const store = configureStore({
   reducer: {
      cat: persistReducer(likedPersistConfig, catReducer),
      [catApi.reducerPath]: catApi.reducer,
   },
   middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
      catApi.middleware,
   ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
