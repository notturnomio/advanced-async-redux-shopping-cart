import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggleCart: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    openCart: (state) => {
      state.cartIsVisible = true;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
