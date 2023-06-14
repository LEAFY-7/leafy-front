import { createSlice } from "@reduxjs/toolkit";

export const toggleStateSlice = createSlice({
  name: "ToggleState",
  initialState: {
    reviewShow: false,
    likeState: false,
  },
  reducers: {
    setReviewShowState: (state, action) => {
      state.reviewShow = action.payload;
    },
  },
});

export const { setReviewShowState } = toggleStateSlice.actions;
export default toggleStateSlice.reducer;
