import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ZodiacItem {
  title: string;
  datePeriod: string;
  imagePath: string;
  callback_data: string;
}

interface ISelectedZodiacState {
  selectedZodiac: ZodiacItem | null;
}

const initialState: ISelectedZodiacState = {
  selectedZodiac: null,
};

const selectedZodiacSlice = createSlice({
  name: "selectedZodiac",
  initialState,
  reducers: {
    selectZodiac: (state, action: PayloadAction<ZodiacItem>) => {
      state.selectedZodiac = action.payload;
    },
    clearSelectedZodiac: (state) => {
      state.selectedZodiac = null;
    },
  },
});

export const { selectZodiac, clearSelectedZodiac } =
  selectedZodiacSlice.actions;

export default selectedZodiacSlice.reducer;
