import React from "react";

export const Crew = ({ crew }: { crew: any }) => {
  return (
    <div className="crew">
      <img
        src={"https://image.tmdb.org/t/p/w500/" + crew.profile_path}
        alt="crew member photograph"
      ></img>
      <p>{crew.name}</p>
      <p>
        {crew.department} - {crew.job}
      </p>
      <p>
        {Math.round(crew.popularity * 10) / 10}/10
        <i className="bi bi-star-fill star"></i>
      </p>
    </div>
  );
};
