import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tea: [],
};

const teaSlice = createSlice({
  name: "tea",
  initialState,
  reducers: {
    setTea(state, action) {
      state.tea = action.payload;
    },
  },
});

export const selectTea = (state) => state.tea.tea;

export const { setTea } = teaSlice.actions;

export default teaSlice.reducer;
