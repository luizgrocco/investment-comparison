import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

// Define a type for the slice state
interface PortfoliosState {
  portfolios: [];
}

// Define the initial state using that type
const initialState: PortfoliosState = {
  portfolios: [],
};

export const portfoliosSlice = createSlice({
  name: "portfolios",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // setThemeMode: (state, action: PayloadAction<ThemeState["mode"]>) => {
    //   state.mode = action.payload;
    // },
  },
});

export default portfoliosSlice.reducer;
