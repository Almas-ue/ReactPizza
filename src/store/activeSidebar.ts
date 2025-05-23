import { createSlice } from "@reduxjs/toolkit";

const activeSidebar = createSlice({
  name: "activeSidebar",
  initialState: {
    value: false,
  },
  reducers: {
    setActiveSidebar: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setActiveSidebar } = activeSidebar.actions;
export default activeSidebar.reducer;
