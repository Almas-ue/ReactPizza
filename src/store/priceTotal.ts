import { createSlice } from "@reduxjs/toolkit";

const priceTotalState = createSlice({
  name: "priceTotal",
  initialState: {
    total: 0,
  },
  reducers: {
    setTotalPrice: (state, action: { payload: number }) => {
      state.total = action.payload;
    },
  },
});

export const { setTotalPrice } = priceTotalState.actions;
export default priceTotalState.reducer;
