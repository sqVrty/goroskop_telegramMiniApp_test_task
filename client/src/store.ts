import { configureStore } from "@reduxjs/toolkit";

import { appLanguageReducer, selectedZodiacReducer } from "./redux/features";
import horoscopeReducer from "./redux/api/horoscope";

export const store = configureStore({
  reducer: {
    appLanguage: appLanguageReducer,
    selectedZodiac: selectedZodiacReducer,
    horoscope: horoscopeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
