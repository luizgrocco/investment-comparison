import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
import { AssetType } from "./../../api/rest-api";

interface PortfolioType {
  assets: AssetType[];
}

// Define a type for the slice state
interface PortfoliosState {
  userPortfolios: PortfolioType[];
  defaultPortfolio: PortfolioType;
}

// Define the initial state using that type
const initialState: PortfoliosState = {
  userPortfolios: [],
  defaultPortfolio: { assets: [] },
};

export const portfoliosSlice = createSlice({
  name: "portfolios",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addAssetToDefaultPortfolio: (state, action: PayloadAction<AssetType>) => {
      state.defaultPortfolio.assets.push(action.payload);
    },
  },
});

export const { addAssetToDefaultPortfolio } = portfoliosSlice.actions;

export default portfoliosSlice.reducer;
