import { createSlice } from "@reduxjs/toolkit";

const priceReducer = createSlice({
  name: "priceMin",
  initialState: {
    value: { min: 0, max: 0 },
  },
  reducers: {
    setMinPrice: (state, action) => {
      action.payload < state.value.max
        ? (state.value.min = action.payload)
        : (state.value.min = state.value.max - 1);
    },
    setMaxPrice: (state, action) => {
      state.value.min < action.payload
        ? (state.value.max = action.payload)
        : (state.value.max = state.value.min + 1);
    },
  },
});

export const { setMinPrice, setMaxPrice } = priceReducer.actions;
export default priceReducer.reducer;
