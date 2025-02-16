import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="container-fluid mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <p className="fw-bold fs-3">{title}</p>
        {linkTitle && (
          <Link to={linkHref} className="btn btn-primary">
            <small>{linkTitle}</small>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
