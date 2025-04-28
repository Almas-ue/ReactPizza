import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./price/priceState";
import categoryReducer from "./category/catogoryRedux";

const store = configureStore({
  reducer: {
    price: priceReducer,
    categoryReducer: categoryReducer,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type PriceDispatch = typeof store.dispatch;

export default store;
