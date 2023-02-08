import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { AssetType } from "./../../api/rest-api";
import { includes, not } from "ramda";

// Define a type for the slice state
interface BenchmarksState {
  selectedBenchmarks: AssetType[];
}

// Define the initial state using that type
const initialState: BenchmarksState = {
  selectedBenchmarks: [],
};

export const benchmarksSlice = createSlice({
  name: "benchmarks",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleBenchmarkSelection: (state, action: PayloadAction<AssetType>) => {
      const asset = action.payload;
      if (not(includes(asset, state.selectedBenchmarks)))
        state.selectedBenchmarks.push(action.payload);
    },
  },
});

export const getSelectedBenchmarks = (
  state: RootState
): BenchmarksState["selectedBenchmarks"] => state.benchmarks.selectedBenchmarks;

export const { toggleBenchmarkSelection } = benchmarksSlice.actions;

export default benchmarksSlice.reducer;
