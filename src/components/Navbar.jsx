import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const [genres, setGenres] = useState([]);

  const anime_genre_url = "https://api.jikan.moe/v4/genres/anime";
  useEffect(() => {
    const apiFetcher = async (url) => {
      const api = await fetch(url);
      const response = await api.json();
      return response;
    };
    apiFetcher(anime_genre_url).then((res) => {
      setGenres(res.data);
    });
  }, []);
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg bg-primary-subtle"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold">
          GabutAnimeList
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Beranda
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genre
              </button>
              <ul className="dropdown-menu">
                {genres.slice(0, 15).map((genre, index) => (
                  <li key={index}>
                    <NavLink to={genre.url} className="dropdown-item">
                      {genre.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <SearchInput />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
