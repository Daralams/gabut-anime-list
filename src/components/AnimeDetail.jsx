import React from "react";
import { Link } from "react-router-dom";

const AnimeDetail = ({ animeDetail }) => {
  return (
    <div className="container-fluid mt-3">
      {animeDetail.map((anime) => (
        <div className="row mt-4" key={anime.mal_id}>
          <div className="col-md-5 mb-3">
            {anime.trailer.embed_url ? (
              <div className="ratio ratio-16x9">
                <iframe
                  src={anime.trailer.embed_url}
                  title="Anime Trailer"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="alert alert-warning text-center">
                Trailer tidak tersedia.
              </div>
            )}
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="fs-5">Judul : {anime.title_english}</p>
              <p className="fs-5">
                Genre : {anime.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p className="fs-5">Episode : {anime.episodes}</p>
              <p className="fs-5">Season : {anime.season}</p>
              <p className="fs-5">Duration : {anime.duration}</p>
              <div className="content">
                <p className="fs-5">Sinopsis : {anime.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeDetail;
