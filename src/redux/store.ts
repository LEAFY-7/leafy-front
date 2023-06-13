import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./feature/appStateSlice";
import userSlice from "./feature/userSlice";
import toggleStateSlice from "./feature/toggleStateSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    appState: appStateSlice,
    toggle: toggleStateSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store;
