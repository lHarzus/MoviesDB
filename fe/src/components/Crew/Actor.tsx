import React from "react";

export const Actor = ({ actor }: { actor: any }) => {
  return (
    <div className="crew">
      <img src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path}></img>

      <p>{actor.name}</p>
      <p>{actor.character}</p>
      <p>
        {Math.round(actor.popularity * 10) / 10}/10
        <i className="bi bi-star-fill star"></i>
      </p>
    </div>
  );
};
