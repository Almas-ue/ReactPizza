import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const categoryNames = createSlice({
  name: "categoryNames",
  initialState: {
    categoryNames: ["Все", "Мясные", "Острые", "Сладкие", "Веган", "С курицей"],
  },
  reducers: {},
});

export const cate = categoryNames.getInitialState().categoryNames;

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: cate[0],
  },
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = state.category === "" ? cate[0] : action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

export const categoryInitialState = categorySlice.getInitialState().category;
