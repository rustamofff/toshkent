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
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function MuseumHome() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.museum);
      console.log(response, "museumHome");
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
    <div className="museum_home_container">
      <div className="title_container">
        <h1 className="title">Muzeylar</h1>
        <Link to="/museum">
          <p>
            <span>BARCHASI</span> <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 5000, // Delay in milliseconds (3000ms = 3 seconds)
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        {apiData?.map((museumHome) => {
          return (
            <SwiperSlide>
              <div
                class="museum_home_content"
                key={museumHome.id}
                onClick={() => navigate(`/museumDetail/${museumHome.id}`)}
              >
                <div class="museum_home_img">
                  <div class="museum_home_img_card">
                    <img src={museumHome.image} alt="Art Gallery" />
                    <div class="museum_home_img_title">
                      {museumHome.title_uz}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
