import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { BenchmarkType } from "./../../api/rest-api";
import { equals, includes, not } from "ramda";

// Define a type for the slice state
interface BenchmarksState {
  selectedBenchmarks: BenchmarkType[];
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
    toggleBenchmarkSelection: (state, action: PayloadAction<BenchmarkType>) => {
      const benchmark = action.payload;
      if (not(includes(benchmark, state.selectedBenchmarks))) {
        state.selectedBenchmarks.push(action.payload);
      } else if (includes(benchmark, state.selectedBenchmarks)) {
        if (state.selectedBenchmarks.length > 1) {
          const elementIndex = state.selectedBenchmarks.findIndex(
            (selectedBenchmark) => equals(selectedBenchmark, benchmark)
          );
          state.selectedBenchmarks.splice(elementIndex, 1);
        }
      }
    },
  },
});

export const getSelectedBenchmarks = (
  state: RootState
): BenchmarksState["selectedBenchmarks"] => state.benchmarks.selectedBenchmarks;

export const { toggleBenchmarkSelection } = benchmarksSlice.actions;

export default benchmarksSlice.reducer;
