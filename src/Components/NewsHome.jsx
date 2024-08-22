import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import dateFormat from "dateformat";
import { useTranslation } from "react-i18next";

export default function ArxeologyHome() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.news);
      console.log(response, "newshome");
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //

  // translate
  const { t } = useTranslation();
  return (
    <div className="swiper_archi_container">
      <div className="title_container">
        <h1 className="title">{t("news")}</h1>
        <Link to="/news">
          <p>
            <span>{t("all")}</span> <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          695: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          696: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {apiData?.map((newsHome) => {
          return (
            <SwiperSlide>
              <div className="exhibition-card" key={newsHome.id}>
                <div className="exhibition-image">
                  <img src={newsHome.image} alt="Exhibition Image" />
                </div>
                <div className="exhibition-info">
                  <h2 className="exhibition-title">{newsHome.title_uz}</h2>

                  {/* <p class="exhibition-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
                  <a className="exhibition-link">
                    <p className="exhibition-date">
                      {dateFormat(newsHome.create, "dd.mm.yyyy")}
                    </p>
                    <button
                      className="more_button"
                      onClick={() => navigate(`/newsDetail/${newsHome.id}`)}
                    >
                      Batafsil
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
