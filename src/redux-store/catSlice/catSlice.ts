import { createSlice } from '@reduxjs/toolkit';

export interface catState {
   likedCat: [];
   value: 0;
}

const initialState: catState = {
   likedCat: [],
   value: 0,
};

export const catSlice = createSlice({
   name: 'cat',
   initialState,
   reducers: {
      addToLiked: (state, action) => {
         state.likedCat.push(action.payload);
      },
      removeToLiked: (state, action) => {
         state.likedCat = state.likedCat.filter((e) => e.id !== action.payload.id);
         console.log(action);
         console.log(state.likedCat);
      },
   },
});

export const { addToLiked, removeToLiked } = catSlice.actions;

export default catSlice.reducer;
