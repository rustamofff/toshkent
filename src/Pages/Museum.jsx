import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Museum() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.museum);
      console.log(response, "museum");
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
    <div className="muzey_container">
      <PageTitle title={"Muzeylar"} />
      <div class="museum_content_container overflow-x-hidden">
        <div class="museum_content h-full  place-items-center gap-x-4 gap-y-6 p-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {apiData?.map((museum) => {
            return (
              // <Link to="/museumDetail" key={museum.id}>
              <div class="museum_page_card  space-y-2" key={museum.id}>
                <div
                  class="overflow-hidden rounded-md"
                  onClick={() => navigate(`/museumDetail/${museum.id}`)}
                >
                  <img
                    class="w-full duration-300 hover:scale-110 hover:opacity-95 shadow-md"
                    src={museum.image}
                    alt=""
                  />
                </div>
                <div className="museum_info">
                  <h1
                    class="text-xl font-semibold text-gray-900"
                    onClick={() => navigate(`/museumDetail/${museum.id}`)}
                  >
                    {museum.title_uz}
                  </h1>

                  <a
                    target="_blank"
                    href={museum.link}
                    class="museum_info_des text-lg "
                  >
                    Muzeyni onlayn sayohat qilish →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
