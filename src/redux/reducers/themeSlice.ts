import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ThemeState {
  mode: "dark" | "light";
}

// Define the initial state using that type
const initialState: ThemeState = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeState["mode"]>) => {
      state.mode = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectThemeMode = (state: RootState): ThemeState["mode"] =>
  state.theme.mode;

export const { setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
