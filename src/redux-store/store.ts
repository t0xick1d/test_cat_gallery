import { configureStore } from '@reduxjs/toolkit';
import catReducer from './catSlice/catSlice.ts';
import { catApi } from './catSlice/catApi.ts';


export const store = configureStore({
   reducer: { cat: catReducer, [catApi.reducerPath]: catApi.reducer },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
