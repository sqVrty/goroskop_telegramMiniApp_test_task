import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/reduxHooks";
import { useTelegram } from "../../hooks/useTelegram";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import classes from "./Header.module.css";

export default function Header() {
  const [isHomePage, setIsHomePage] = useState<boolean>();

  const { tg } = useTelegram();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedZodiacData = useAppSelector(
    (state) => state.selectedZodiac.selectedZodiac
  );

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location.pathname]);

  useEffect(() => {
    const handleBackButtonClick = () => {
      navigate(-1);
    };

    if (!isHomePage) {
      tg.BackButton.show();
      tg.BackButton.onClick(handleBackButtonClick);
    } else {
      tg.BackButton.hide();
    }

    return () => {
      tg.BackButton.offClick(handleBackButtonClick);
    };
  }, [isHomePage, tg, navigate]);

  return (
    <div className={classes.headerContainer}>
      {!isHomePage && selectedZodiacData && (
        <div className={classes.selectedZodiacHeader}>
          <h3 className={classes.title}>{selectedZodiacData.title}</h3>
          <p className={classes.datePeriod}>{selectedZodiacData.datePeriod}</p>
        </div>
      )}
      {isHomePage && (
        <div className={classes.languageSwitcher}>
          <LanguageSwitcher />
        </div>
      )}
    </div>
  );
}
