import { createSlice } from "@reduxjs/toolkit";

const menuTradititon = createSlice({
  name: "menuTradititon",
  initialState: {
    menuTradititon: ["Тонкое", "Толстое"],
  },
  reducers: {},
});

export const menuTradititonPizza =
  menuTradititon.getInitialState().menuTradititon;

const tradititonPizza = createSlice({
  name: "tradititonPizza",
  initialState: {
    value: menuTradititonPizza[0],
  },
  reducers: {
    setTradiotionalPizza: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default tradititonPizza.reducer;
export const { setTradiotionalPizza } = tradititonPizza.actions;
