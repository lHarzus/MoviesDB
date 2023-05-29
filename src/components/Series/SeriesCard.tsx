import React from "react";
import { Link } from "react-router-dom";

export const SeriesCard = ({ series }: { series: any }) => {
  return (
    <div className="single-series">
      <Link to={`/series/${series.id}`}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + series.poster_path}
        ></img>
        <span className="title">{series.original_name}</span>
      </Link>
      <p>{series.first_air_date}</p>
      <p>
        <span>{Math.round(series.vote_average * 10) / 10} / 10</span> with{" "}
        {series.vote_count} votes
      </p>
    </div>
  );
};
