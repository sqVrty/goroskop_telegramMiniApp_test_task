import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setAppLanguage } from "../../redux/features/appLanguageSlice";

import flagRu from "/flag_ru.svg";
import flagUs from "/flag_us.svg";
import classes from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const appLanguage = useAppSelector((state) => state.appLanguage.appLanguage);

  const handleAppLanguageChange = () => {
    const newLanguage = appLanguage === "en" ? "ru" : "en";
    dispatch(setAppLanguage(newLanguage));
  };

  return (
    <div className={classes.container} onClick={handleAppLanguageChange}>
      {appLanguage === "ru" ? (
        <img src={flagRu} alt="ru" className={classes.image} />
      ) : (
        <img src={flagUs} alt="en" className={classes.image} />
      )}
    </div>
  );
}
