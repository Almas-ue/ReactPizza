import { createSlice } from "@reduxjs/toolkit";
import { sessionStorageUtil } from "@/lib/sessionStorage";

const STATE_NAME = "busket";

const busketState = createSlice({
  name: STATE_NAME,
  initialState: {
    value: sessionStorageUtil.get(STATE_NAME) || [],
  },
  reducers: {
    setStateBusket: (state, action: { payload: any }) => {
      if (action.payload.length !== 0) {
        action.payload.count += 1;
        const res = action.payload;
        state.value.push(res);
        sessionStorageUtil.set(STATE_NAME, state.value);
      }
    },

    destroyState: (state) => {
      state.value = [];
      sessionStorageUtil.remove(STATE_NAME);
    },

    removeItem: (state, action: { payload: any }) => {
      const id = state.value
        .map((item: any) => item.id)
        .indexOf(action.payload);

      if (id !== -1) {
        state.value.splice(id, 1);
        sessionStorageUtil.set(STATE_NAME, state.value);
      }
    },

    incCountBusket: (state, action: { payload: number }) => {
      state.value.find((item: any) => {
        if (item.id === action.payload) {
          item.count += 1;
        }
      });
      sessionStorageUtil.set(STATE_NAME, state.value);
    },

    decCountBusket: (state, action: { payload: number }) => {
      state.value.find((item: any) => {
        if (item.id === action.payload) {
          item.count -= 1;
        }
      });
      sessionStorageUtil.set(STATE_NAME, state.value);
    },
  },
});

export const {
  setStateBusket,
  removeItem,
  incCountBusket,
  decCountBusket,
  destroyState,
} = busketState.actions;
export default busketState.reducer;
