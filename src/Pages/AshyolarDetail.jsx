import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { useParams } from "react-router-dom";

export default function AshyolarDetail() {
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.ashyoById(route?.id));
    setApiData(response);
    // let x = document.querySelector("title");
    // x.textContent = `Voqealar / Yigʻinlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  // video function
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };
  return (
    <div className="arxeology_detail_container">
      <PageTitle title={apiData?.title_uz} />
      <div className="arxeology_detail_content">
        {/* <!-- component --> */}
        <div class="p-8">
          <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <div className="arxeology_detail_img">
              <img src={apiData?.image} alt="" />
            </div>
            <div class="space-y-12 px-2 xl:px-16 mt-12">
              <div class="mt-4 flex">
                <div>
                  <div class="flex items-center h-16 border-l-4 border-blue-600">
                    {/* <span class="text-4xl text-blue-600 px-4">Q.</span> */}
                  </div>
                  <div class="flex items-center h-16 border-l-4 border-gray-400">
                    {/* <span class="text-4xl text-gray-400 px-4">A.</span> */}
                  </div>
                </div>
                <div style={{ paddingLeft: "50px" }}>
                  {/* <div class="flex items-center h-16">
                    <span class="text-lg text-blue-600 font-bold">O‘rni:</span>
                  </div> */}
                  <div class="flex items-center py-2">
                    <span
                      class="text-gray-500"
                      dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
                    ></span>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex">
                <div>
                  <div class="flex items-center h-16 border-l-4 border-blue-600">
                    {/* <span class="text-4xl text-blue-600 px-4">Q.</span> */}
                  </div>
                  <div class="flex items-center h-16 border-l-4 border-gray-400">
                    {/* <span class="text-4xl text-gray-400 px-4">A.</span> */}
                  </div>
                </div>
                <div style={{ paddingLeft: "50px" }}>
                  <div class="flex items-center h-16">
                    <span class="text-lg text-blue-600 font-bold">
                      Ilmiy ahamiyati:
                    </span>
                  </div>
                  <div class="flex items-center py-2">
                    <span class="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae, dignissimos. Neque eos, dignissimos provident
                      reiciendis debitis repudiandae commodi perferendis et
                      itaque, similique fugiat cumque impedit iusto vitae
                      dolorum. Nostrum, fugit! Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Fugit blanditiis, natus
                      molestias aut facilis nostrum. Quasi fuga, culpa deleniti
                      sed dolor assumenda aspernatur placeat iusto qui ratione
                      expedita reiciendis, adipisci consequuntur. Dolore enim
                      voluptatibus dignissimos veritatis ex eaque consectetur
                      nostrum repellendus, sit culpa. Voluptatum minima repellat
                      aspernatur, atque magnam nisi!
                    </span>
                  </div>
                </div>
              </div>
              {/* video container */}
              <div className="ashyolar_video_container">
                <div className="ashyolar_video_content">
                  <div className="video">
                    {isVideoPlaying ? (
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/GNwK4g6tXv8?si=9yGME-v8ENejhNZJ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      <div className="thumbnail">
                        <img
                          src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg"
                          alt="Video Thumbnail"
                        />
                        <button
                          className="play-button"
                          onClick={handlePlayButtonClick}
                        >
                          ▶️
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* video end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
