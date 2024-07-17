import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function ArxeologyDetail() {
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.arxeologyById(route?.id));
    setApiData(response);
    // let x = document.querySelector("title");
    // x.textContent = `Voqealar / Yigʻinlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  // vide function
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };
  // video link
  function convertToEmbedLink(link) {
    const videoId = link?.split("v=")[1];
    console.log(videoId);
    if (videoId != undefined) {
      const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      return embedLink;
    } else return `${link}?autoplay=1`;
  }

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

              {/* video container */}
              <div className="ashyolar_video_container">
                <div className="ashyolar_video_content">
                  <div className="video">
                    {isVideoPlaying ? (
                      <iframe
                        width="560"
                        height="315"
                        src={convertToEmbedLink(apiData?.link)}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    ) : (
                      <div className="thumbnail">
                        <img src={apiData?.image} alt="Video Thumbnail" />
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
