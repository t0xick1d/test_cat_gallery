import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatI } from '../../types/CatInterface';

export interface catStateI {
   likedCat: CatI[];
}

const initialState: catStateI = {
   likedCat: [],
};

export const catSlice = createSlice({
   name: 'cat',
   initialState,
   reducers: {
      addToLiked: (state, action: PayloadAction<CatI>) => {
         state.likedCat.push(action.payload);
      },
      removeToLiked: (state, action: PayloadAction<CatI>) => {
         state.likedCat = state.likedCat.filter((e) => e.id !== action.payload.id);
         console.log(action);
         console.log(state.likedCat);
      },
   },
});

export const { addToLiked, removeToLiked } = catSlice.actions;

export default catSlice.reducer;
