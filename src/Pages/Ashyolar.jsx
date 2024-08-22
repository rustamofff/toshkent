import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Ashyolar() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.ashyo);
      console.log(response, "ashyolar");
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
    <div className="ashyo_container">
      <PageTitle title={"Ashyolar"} />
      <div class="full_card_container    ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiData?.results?.map((ashyo) => {
            return (
              <div
                class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
                key={ashyo.id}
                onClick={() => navigate(`/ashyolarDetail/${ashyo.id}`)}
              >
                <img
                  src={ashyo.image}
                  alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                  class="w-full h-auto object-cover rounded-lg"
                />
                <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50  text-white p-4 rounded-b-lg">
                  <h1 class="card_title text-2xl font-semibold">
                    {ashyo.title_uz}sdlabskj sdfkjbsjdk sdkjbhsdjk shbfdskj
                    sdkfhkjhkj
                  </h1>
                  <p
                    class="mt-2"
                    dangerouslySetInnerHTML={{ __html: ashyo.context_uz }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
