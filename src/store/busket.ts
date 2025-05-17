import { createSlice } from "@reduxjs/toolkit";
import { sessionStorageUtil } from "@/lib/sessionStorage";

const STATE_NAME = "busket";

const busketState = createSlice({
  name: STATE_NAME,
  initialState: {
    value: sessionStorageUtil.get(STATE_NAME) || [],
  },
  reducers: {
    setStateBusket: (state, action: { payload: any[] }) => {
      if (action.payload.length !== 0) {
        state.value.push(action.payload);
        sessionStorageUtil.set(STATE_NAME, state.value);
      } else {
        state.value = [];
        sessionStorageUtil.remove(STATE_NAME);
      }
    },
  },
});

export const { setStateBusket } = busketState.actions;
export default busketState.reducer;
