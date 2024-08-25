import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface HoroscopeResponse {
  sign: string;
  language: string;
  period: string;
  horoscope: string;
}

interface HoroscopeState {
  data: HoroscopeResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: HoroscopeState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchHoroscope = createAsyncThunk(
  "fetchHoroscope",
  async (
    {
      sign,
      language,
      period,
    }: { sign: string; language: string; period: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch("https://poker247tech.ru/get_horoscope/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sign, language, period }),
      });

      if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error(`Failed to fetch horoscope: ${errorDetail}`);
      }

      const data: HoroscopeResponse = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(
        // @ts-ignore
        error?.message || "Failed to fetch horoscope data"
      );
    }
  }
);

const horoscopeSlice = createSlice({
  name: "horoscope",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHoroscope.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHoroscope.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHoroscope.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default horoscopeSlice.reducer;
