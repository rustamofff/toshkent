import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { useParams } from "react-router-dom";

export default function AshyolarDetail() {
  const { id } = useParams();
  // const history = useHistory();
  const [apiData, setApiData] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DataService.get(endpoints.ashyoById(id));
        setApiData(response);
        // document.title = `Voqealar / Yigʻinlar / ${response.title}`;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  const renderContent = () => {
    if (!apiData) return null;

    if (isVideoPlaying && apiData.video_link) {
      if (
        apiData.video_link.includes("youtube.com") ||
        apiData.video_link.includes("youtu.be")
      ) {
        const videoId = apiData.video_link.includes("youtube.com")
          ? apiData.video_link.split("v=")[1]
          : apiData.video_link.split("/").slice(-1)[0];
        const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        return (
          <iframe
            width="560"
            height="315"
            src={embedLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        );
      } else {
        // Boshqa video manbasini (kerak bo'lsa) boshqarish
        return (
          <video controls autoPlay>
            <source src={apiData.video} type="video/mp4" />
          </video>
        );
      }
    } else {
      // Sukutiy rasm yoki suratni ko'rsatish
      return (
        <div className="thumbnail">
          <img src={apiData.image} alt="Video Thumbnail" />
          <button className="play-button" onClick={handlePlayButtonClick}>
            ▶️
          </button>
        </div>
      );
    }
  };
  return (
    <div className="arxeology_detail_container">
      <PageTitle title={apiData?.title_uz} />
      <div className="arxeology_detail_content">
        <div className="p-8">
          <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <div className="arxeology_detail_img">
              <img src={apiData?.image} alt="" />
            </div>
            <div className="space-y-12 px-2 xl:px-16 mt-12">
              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-blue-600"></div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400"></div>
                </div>
                <div style={{ paddingLeft: "50px" }}>
                  <div className="flex items-center py-2">
                    <span
                      className="text-gray-500"
                      dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
                    ></span>
                  </div>
                </div>
              </div>

              {/* video container */}
              <div className="museum_detail_container">
                <div className="museum_detail_content">
                  <div className="video">{renderContent()}</div>
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
