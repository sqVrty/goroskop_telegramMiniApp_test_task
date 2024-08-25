import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTelegram } from "./hooks/useTelegram";
import { setAppLanguage } from "./redux/features/appLanguageSlice";
import { useAppDispatch } from "./hooks/reduxHooks";

import Header from "./components/Header/Header";
import ZodiacItemsList from "./components/ZodiacItemsList/ZodiacItemsList";
import DescriptionPage from "./pages/Description/DescriptionPage";

import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  const { tg, user } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  useEffect(() => {
    if (user?.language_code === "ru") {
      dispatch(setAppLanguage("ru"));
    } else {
      dispatch(setAppLanguage("en"));
    }
  }, [user?.language_code, dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<ZodiacItemsList />} />
            <Route path="/zodiac/:zodiacTitle" element={<DescriptionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
