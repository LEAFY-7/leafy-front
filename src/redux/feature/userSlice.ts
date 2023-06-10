import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: string;
  username: string;
  displayName: string;
  token: string;
};

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("leafy");
      } else {
        if (action.payload.token) {
          const userToken = action.payload.token;
          localStorage.setItem("leafy", userToken);
        }
      }
      state.user = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
