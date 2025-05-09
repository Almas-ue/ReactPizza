import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./priceState";
import categoryReducer from "./catogoryRedux";
import sortState from "./sortState";

const store = configureStore({
  reducer: {
    price: priceReducer,
    categoryReducer: categoryReducer,
    sort: sortState,
  },
});

export type StateType = ReturnType<typeof store.getState>;
export type PriceDispatch = typeof store.dispatch;

export default store;
