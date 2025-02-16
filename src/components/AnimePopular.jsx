import React from "react";
import { Link } from "react-router-dom";

const AnimePopular = ({ api }) => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-sm-2">
        {api.map((anime, index) => (
          <Link
            to={`/anime/${anime.mal_id}`}
            className="col-md-2 mb-3"
            key={index}
          >
            <div className="card shadow h-100">
              <img
                src={anime.images.webp.image_url}
                className="card-img-top anime-img"
                alt={anime.title_english}
              />
              <div className="card-body">
                <p className="card-text">{anime.title_english}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimePopular;
