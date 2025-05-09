import { createSlice } from "@reduxjs/toolkit";

export enum ListSort {
  DEFAULT = "Умолчанию",
  DOWN = "Убыванию",
  UP = "Возрастанию",
}

const sortState = createSlice({
  name: "sort",
  initialState: {
    sorting: ListSort.DEFAULT,
  },
  reducers: {
    setSort: (state, action) => {
      state.sorting = action.payload;
    },
  },
});

export default sortState.reducer;
export const { setSort } = sortState.actions;
