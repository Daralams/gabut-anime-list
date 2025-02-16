import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSearchInput = () => {
    const keyword = searchRef.current.value;
    navigate(`/anime/search/${keyword}`);
  };
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        ref={searchRef}
      />
      <button
        className="btn btn-outline-light fw-bold"
        type="submit"
        onClick={handleSearchInput}
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
