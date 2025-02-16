import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../layouts/HomePage";
import DetailPage from "../layouts/DetailPage";
import AllPopularPage from "../layouts/AllPopularPage";
import SearchResultPage from "../layouts/SearchResultPage";
import AllRecomendedPage from "../layouts/AllRecomendedPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:mal_id" element={<DetailPage />} />
        <Route path="/anime/popular/all" element={<AllPopularPage />} />
        <Route path="/anime/recomended/all" element={<AllRecomendedPage />} />
        <Route path="/anime/search/:keyword" element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
