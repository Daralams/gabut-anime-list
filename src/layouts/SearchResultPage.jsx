import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import AnimePopular from "../components/AnimePopular";
import Loading from "../components/Loading";

const SearchResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animeSearchResult, setAnimeSearchResult] = useState([]);
  const params = useParams();

  useEffect(() => {
    const anime_popular_url = `https://api.jikan.moe/v4/anime?q=${params.keyword}`;
    const apiFetcher = async (url) => {
      const api = await fetch(url);
      const response = api.json();
      return response;
    };
    apiFetcher(anime_popular_url).then((res) => {
      setAnimeSearchResult(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <section>
            <Header title={`Hasil pencarian : ${params.keyword}`} />
            <AnimePopular api={animeSearchResult} />
          </section>
        </>
      )}
    </>
  );
};

export default SearchResultPage;
