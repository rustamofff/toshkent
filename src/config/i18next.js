import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      news: "Yangiliklar",
      arxeology: "Yodgorliklar",
      ashyo: "Ashyolar",
      museum: "Muzeylar",
      library: "Kutubxona",
      about: "Biz haqimizda",
      all: "Barchasi",
    },
  },
  en: {
    translation: {
      news: "News",
      arxeology: "Memorials",
      ashyo: "Artifacts",
      museum: "Museums",
      library: "Library",
      about: "About Us",
      all: "all of",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // Boshlang'ich til
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
