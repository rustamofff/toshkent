import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactDatePicker from "./ReactDatePicker";
import Weather from "./Weather";
import Language from "./Language";
import { useTranslation } from "react-i18next";

export default function Headers() {
  const { t } = useTranslation();
  const [time, setTime] = useState(new Date());

  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="header_logo">
            <Link to="/">
              <strong>
                <span>TOSHKENT</span> <br />
                ARXEOLOGIYASI <br />
              </strong>
            </Link>
          </div>
          <div className="header_content">
            <div className="header_element">
              <div className="full__data__picer">
                <div className="live__time">
                  <p>{time.toLocaleTimeString()}</p>
                </div>
                <div className="live__calendar">
                  <ReactDatePicker />
                </div>
              </div>
              <div className="ob-havo">
                <Weather />
              </div>
              <div className="search">
                <FaSearch />
                <span>Qidiruv</span>
              </div>
              <div className="donate">
                {/* <FaSearch /> */}
                <Language />
              </div>
            </div>
            <div className="header_nav">
              <ul>
                <li>
                  <Link to="/news">Yangiliklar</Link>
                </li>
                <li>
                  <Link to="/arxeology">Yodgorliklar</Link>
                </li>
                <li>
                  <Link to="/ashyolar">{t("ashyo_")}</Link>
                </li>
                <li>
                  <Link to="/museum">Muzeylar</Link>
                </li>
                <li>
                  <Link to="/library">Kutubxona</Link>
                </li>
                <li>
                  <Link to="/about">Biz haqimizda</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
