import { createSlice } from "@reduxjs/toolkit";

interface PageState {
  page: number;
}
const initialState: PageState = {
  page: 0,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload.number;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
