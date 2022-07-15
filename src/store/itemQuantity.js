import { createSlice } from "@reduxjs/toolkit";

const initialQuantityState = { quantity: 0 };

const quantitySlice = createSlice({
  name: "quantity",
  initialState: initialQuantityState,
  reducers: {
    addQuantity: (state) => {
      state.quantity++;
    },
    substractQuantity: (state) => {
      state.quantity--;
    },
  },
});

export const quantityActions = quantitySlice.actions;

export default quantitySlice.reducer;
