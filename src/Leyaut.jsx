import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useTranslation } from "react-i18next";
import i18n from "./config/i18next";
export default function Leyaut() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="leyaut_container">
      <Header switchLanguage={switchLanguage} />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
