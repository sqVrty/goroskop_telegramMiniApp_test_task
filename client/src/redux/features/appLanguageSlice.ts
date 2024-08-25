import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppLanguageState {
  appLanguage: "ru" | "en";
}

const initialState: IAppLanguageState = {
  appLanguage: "en",
};

const appLanguageSlice = createSlice({
  name: "appLanguage",
  initialState,
  reducers: {
    setAppLanguage: (state, action: PayloadAction<"ru" | "en">) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { setAppLanguage } = appLanguageSlice.actions;

export default appLanguageSlice.reducer;
