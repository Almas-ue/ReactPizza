import { sessionStorageUtil } from "@/lib/sessionStorage";
import { createSlice } from "@reduxjs/toolkit";

const STATE_NAME = "busket";

const busketState = createSlice({
  name: STATE_NAME,
  initialState: {
    value: sessionStorageUtil.get(STATE_NAME) || [],
  },
  reducers: {
    setStateBusket: (state, action) => {
      sessionStorageUtil.set(STATE_NAME, action.payload);
      state.value = action.payload;
    },
  },
});

export const { setStateBusket } = busketState.actions;
export default busketState.reducer;
