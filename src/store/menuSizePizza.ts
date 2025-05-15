import { createSlice } from "@reduxjs/toolkit";

const menuSize = createSlice({
  name: "menuSize",
  initialState: {
    menuSize: ["Маленькая", "Средняя", "Большая"],
  },
  reducers: {},
});

export const menuSizePizza = menuSize.getInitialState().menuSize;

const sizePizza = createSlice({
  name: "sizePizza",
  initialState: {
    value: menuSizePizza[0],
  },
  reducers: {
    setPizzeSize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default sizePizza.reducer;
export const { setPizzeSize } = sizePizza.actions;
