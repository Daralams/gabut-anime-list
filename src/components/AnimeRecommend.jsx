import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AnimeRecommend = ({ api }) => {
  return (
    <div className="container-fluid mb-4">
      <div className="row">
        {api.map((item, index) => (
          <div className="col-md-12" key={index}>
            <div className="card mb-2">
              <div className="card-header">
                {item.content.length > 100
                  ? item.content.slice(0, 150) + "..."
                  : item.content}
              </div>
              {item.entry.map((anime, index) => (
                <Link
                  to={`/anime/${anime.mal_id}`}
                  className="card-body text-decoration-none"
                >
                  <div className="col-md-5" key={index}>
                    <div className="mb-3">
                      <div className="row g-0 ">
                        <div className="col-md-1">
                          <img
                            src={anime.images.webp.small_image_url}
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <p className="card-text">
                              <small className="text-body-secondary">
                                {anime.title}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="card-footer">
                <small>
                  Recomended anime by{" "}
                  <a href={item.user.url}>{item.user.username}</a>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeRecommend;
