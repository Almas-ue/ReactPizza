import { createSlice } from "@reduxjs/toolkit";

const ingredientInfo = createSlice({
  name: "ingredientInfo",
  initialState: {
    value: [{}],
  },
  reducers: {
    setIngredientInfo: (
      state,
      action: { payload: { name: string; price: number } }
    ) => {
      state.value.push(action.payload);
    },
    removeIngredientInfo: (state, action: { payload: { name: string } }) => {
      state.value = state.value.filter(
        (item: any) => item.name !== action.payload.name
      );
    },
  },
});

export const ingredientInfoPrice = ingredientInfo.getInitialState().value;

export default ingredientInfo.reducer;
export const { setIngredientInfo, removeIngredientInfo } =
  ingredientInfo.actions;
