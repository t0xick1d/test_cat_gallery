import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface catState {
   value: number;
}

const initialState: catState = {
   value: 0,
};

export const catSlice = createSlice({
   name: 'cat',
   initialState,
   reducers: {
      increment: (state) => {
         state.value += 1;
      },
      decrement: (state) => {
         state.value -= 1;
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
         state.value += action.payload;
      },
   },
});

export const { increment, decrement, incrementByAmount } = catSlice.actions;

export default catSlice.reducer;
