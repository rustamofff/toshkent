import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function LibraryHome() {
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.library);
      console.log(response, "libraryHome");
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //

  return (
    <div className="library_home_container">
      <div className="title_container">
        <h1 className="title">Kutubxona</h1>
        <Link to="/library">
          <p>
            <span>BARCHASI</span> <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 5000, // Delay in milliseconds (3000ms = 3 seconds)
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        {apiData?.results?.map((libraryHome) => {
          return (
            <SwiperSlide>
              <div className="library_home_card">
                <div className="library_home_img">
                  <img src={libraryHome.image} alt="" />
                </div>
                <div className="library_home_title">
                  <a
                    href={libraryHome.file}
                    target="_blank"
                    className="library_home_name"
                  >
                    <span>{libraryHome.title_uz}</span>
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
