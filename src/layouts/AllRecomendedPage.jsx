import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Loading from "../components/Loading";
import AnimeRecommend from "../components/AnimeRecommend";
import Footer from "../components/Footer";

const AllRecomendedPage = () => {
  const [recomendedAnime, setRecomendedAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const anime_recomended_url =
      "https://api.jikan.moe/v4/recommendations/anime";
    try {
      const apiFetcher = async (url) => {
        const api = await fetch(url);
        const response = api.json();
        return response;
      };
      apiFetcher(anime_recomended_url).then((res) => {
        setRecomendedAnime(res.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="container-fluid mt-3">
            <Breadcrumb
              prev_link="Beranda"
              current_link1="All recomended anime"
            />
          </div>
          <AnimeRecommend api={recomendedAnime} />
          <Footer />
        </>
      )}
    </>
  );
};

export default AllRecomendedPage;
