import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AnimePopular from "../components/AnimePopular";
import AnimeRecommend from "../components/AnimeRecommend";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularAnime, setPopularAnime] = useState([]);
  const [recomendedAnime, setRecomendedAnime] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const anime_popular_url = "https://api.jikan.moe/v4/top/anime?limit=12";
    const anime_recomended_url =
      "https://api.jikan.moe/v4/recommendations/anime";
    try {
      const apiFetcher = async (url) => {
        const api = await fetch(url);
        const response = api.json();
        return response;
      };

      apiFetcher(anime_popular_url).then((res) => {
        setPopularAnime(res.data);
        setIsLoading(false);
      });
      apiFetcher(anime_recomended_url).then((res) => {
        setRecomendedAnime(res.data.slice(0, 5));
      });
    } catch (error) {
      setIsError(error.message);
      console.error(error);
    }
  }, []);

  return (
    <>
      {isError ? <div className="alert alert-danger">{isError}</div> : " "}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <section>
            <Header
              title="Popular Anime"
              linkTitle="view more"
              linkHref="/anime/popular/all"
            />
            <AnimePopular api={popularAnime} />
          </section>
          <section>
            <Header
              title="Recomended Anime"
              linkTitle="view more"
              linkHref="/anime/recomended/all"
            />
            <hr/>
            <AnimeRecommend api={recomendedAnime} />
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
