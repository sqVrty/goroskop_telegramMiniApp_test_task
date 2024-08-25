import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchHoroscope } from "../../redux/api/horoscope";

import classes from "./DescriptionPage.module.css";

export default function DescriptionPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useAppSelector((state) => state.horoscope);
  const selectedZodiacData = useAppSelector(
    (state) => state.selectedZodiac.selectedZodiac
  );
  const appLanguage = useAppSelector((state) => state.appLanguage.appLanguage);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  useEffect(() => {
    if (selectedZodiacData) {
      const sign = selectedZodiacData.callback_data.toLowerCase();
      const language = appLanguage === "ru" ? "original" : "translated";
      const period = "today";

      dispatch(fetchHoroscope({ sign, language, period }));
    }
  }, [dispatch, selectedZodiacData, appLanguage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const touchDistance = touchEndXRef.current - touchStartXRef.current;

      if (touchDistance > 100) {
        navigate(-1);
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div
      className={classes.descContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <p className={classes.desc}>{data.horoscope}</p>}
    </div>
  );
}
