import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnimeDetail from "../components/AnimeDetail";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const DetailPage = () => {
  const [animeDetail, setAnimeDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { mal_id } = useParams();

  useEffect(() => {
    try {
      const anime_detail_url = `https://api.jikan.moe/v4/anime/${mal_id}/full`;
      const apiFetcher = async (url) => {
        const api = await fetch(url);
        const response = api.json();
        return response;
      };
      apiFetcher(anime_detail_url).then((res) => {
        setAnimeDetail([res.data]);
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
            <Breadcrumb prev_link="Beranda" current_link1="Detail Anime" />
          </div>
          <AnimeDetail animeDetail={animeDetail} />
          <Footer />
        </>
      )}
    </>
  );
};

export default DetailPage;
