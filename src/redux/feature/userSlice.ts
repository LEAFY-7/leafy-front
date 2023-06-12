import { createSlice } from "@reduxjs/toolkit";

type Status = "admin" | "normal" | "member";
type User = {
  id: string;
  username: string;
  displayName: string;
  token: string;
  status: Status[];
};

const initialState: { user: User } = {
  user: {
    id: "",
    username: "",
    displayName: "",
    token: "",
    status: ["admin"],
  },
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
