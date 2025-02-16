import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AnimePopular from "../components/AnimePopular";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";

const AllPopularPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularAnime, setPopularAnime] = useState([]);
  useEffect(() => {
    const anime_popular_url_all = "https://api.jikan.moe/v4/top/anime";
    try {
      const apiFetcher = async (url) => {
        const api = await fetch(url);
        const response = api.json();
        return response;
      };
      apiFetcher(anime_popular_url_all).then((res) => {
        setPopularAnime(res.data);
        console.log(res);
        setIsLoading(false);
      });
    } catch (error) {
      console.error(error);
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
            <Breadcrumb prev_link="Beranda" current_link1="All popular anime" />
          </div>
            <AnimePopular api={popularAnime} />
        </>
      )}
    </>
  );
};

export default AllPopularPage;
