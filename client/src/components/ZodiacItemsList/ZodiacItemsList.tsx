import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { selectZodiac } from "../../redux/features/selectedZodiacSlice";

import ZodiacItem from "../ZodiacItem/ZodiacItem";

import classes from "./ZodiacItemsList.module.css";

interface ZodiacSign {
  title: {
    ru: string;
    en: string;
  };
  datePeriod: {
    ru: string;
    en: string;
  };
  imagePath: string;
  callback_data: string;
}

const zodiacSigns: ZodiacSign[] = [
  {
    title: { ru: "Овен", en: "Aries" },
    datePeriod: { ru: "21 марта — 19 апреля", en: "March 21 — April 19" },
    imagePath: "/aries.png",
    callback_data: "aries",
  },
  {
    title: { ru: "Телец", en: "Taurus" },
    datePeriod: { ru: "20 апреля — 20 мая", en: "April 20 — May 20" },
    imagePath: "/taurus.png",
    callback_data: "taurus",
  },
  {
    title: { ru: "Близнецы", en: "Gemini" },
    datePeriod: { ru: "21 мая — 20 июня", en: "May 21 — June 20" },
    imagePath: "/gemini.png",
    callback_data: "gemini",
  },
  {
    title: { ru: "Рак", en: "Cancer" },
    datePeriod: { ru: "21 июня — 22 июля", en: "June 21 — July 22" },
    imagePath: "/cancer.png",
    callback_data: "cancer",
  },
  {
    title: { ru: "Лев", en: "Leo" },
    datePeriod: { ru: "23 июля — 22 августа", en: "July 23 — August 22" },
    imagePath: "/leo.png",
    callback_data: "leo",
  },
  {
    title: { ru: "Дева", en: "Virgo" },
    datePeriod: {
      ru: "23 августа — 22 сентября",
      en: "August 23 — September 22",
    },
    imagePath: "/virgo.png",
    callback_data: "virgo",
  },
  {
    title: { ru: "Весы", en: "Libra" },
    datePeriod: {
      ru: "23 сентября — 22 октября",
      en: "September 23 — October 22",
    },
    imagePath: "/libra.jpg",
    callback_data: "libra",
  },
  {
    title: { ru: "Скорпион", en: "Scorpio" },
    datePeriod: {
      ru: "23 октября — 21 ноября",
      en: "October 23 — November 21",
    },
    imagePath: "/scorpio.png",
    callback_data: "scorpio",
  },
  {
    title: { ru: "Стрелец", en: "Sagittarius" },
    datePeriod: {
      ru: "22 ноября — 21 декабря",
      en: "November 22 — December 21",
    },
    imagePath: "/sagittarius.png",
    callback_data: "sagittarius",
  },
  {
    title: { ru: "Козерог", en: "Capricorn" },
    datePeriod: {
      ru: "22 декабря — 19 января",
      en: "December 22 — January 19",
    },
    imagePath: "/capricorn.png",
    callback_data: "capricorn",
  },
  {
    title: { ru: "Водолей", en: "Aquarius" },
    datePeriod: {
      ru: "20 января — 18 февраля",
      en: "January 20 — February 18",
    },
    imagePath: "/aquarius.png",
    callback_data: "aquarius",
  },
  {
    title: { ru: "Рыбы", en: "Pisces" },
    datePeriod: { ru: "19 февраля — 20 марта", en: "February 19 — March 20" },
    imagePath: "/pisces.png",
    callback_data: "pisces",
  },
];

const getZodiacInfo = (sign: ZodiacSign, language: "ru" | "en") => ({
  title: language === "ru" ? sign.title.ru : sign.title.en,
  datePeriod: language === "ru" ? sign.datePeriod.ru : sign.datePeriod.en,
});

export default function ZodiacItemsList() {
  const dispatch = useAppDispatch();
  const appLanguage = useAppSelector((state) => state.appLanguage.appLanguage);

  const handleZodiacItemClick = (item: ZodiacSign) => {
    dispatch(
      selectZodiac({
        title: item.title[appLanguage],
        datePeriod: item.datePeriod[appLanguage],
        imagePath: item.imagePath,
        callback_data: item.callback_data,
      })
    );
  };

  return (
    <div className={classes.zodiacItemsList}>
      {zodiacSigns.map((item) => (
        <Link
          to={`/zodiac/${item.callback_data}`}
          key={item.callback_data}
          className={classes.zodiacItemContainer}
          onClick={() => handleZodiacItemClick(item)}
        >
          <ZodiacItem
            title={getZodiacInfo(item, appLanguage).title}
            datePeriod={getZodiacInfo(item, appLanguage).datePeriod}
            imagePath={item.imagePath}
          />
        </Link>
      ))}
    </div>
  );
}
