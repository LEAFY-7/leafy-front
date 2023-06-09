import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./feature/appStateSlice";
import userSlice from "./feature/userSlice";

const store = configureStore({
  reducer: {
    appState: appStateSlice,
    user: userSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store;
