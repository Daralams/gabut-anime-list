import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ prev_link, current_link1, currrent_link2 }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">{prev_link}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {current_link1}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
