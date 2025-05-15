import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./priceState";
import categoryReducer from "./catogoryRedux";
import sortState from "./sortState";
import pizzaSize from "./menuSizePizza";
import tradionalPizza from "./menuTradiotional";
import ingredientInfo from "./ingredientState";
import activeSidebar from "./activeSidebar";
import busket from "./busket";

const store = configureStore({
  reducer: {
    price: priceReducer,
    categoryReducer: categoryReducer,
    sort: sortState,
    menuSizePizza: pizzaSize,
    tradionalPizza: tradionalPizza,
    ingredientInfo: ingredientInfo,
    activeSidebar: activeSidebar,
    busket: busket,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type PriceDispatch = typeof store.dispatch;

export default store;
