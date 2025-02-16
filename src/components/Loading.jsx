import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
