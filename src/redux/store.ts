import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import portfoliosReducer from "./reducers/portfoliosSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    portfolios: portfoliosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
