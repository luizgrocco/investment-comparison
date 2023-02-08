import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import portfoliosReducer from "./reducers/portfoliosSlice";
import benchmarksReducer from "./reducers/benchmarksSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    portfolios: portfoliosReducer,
    benchmarks: benchmarksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
