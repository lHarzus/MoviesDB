import React from "react";
import { Link } from "react-router-dom";

export const Trending = ({
  filter,
  setFilter,
  movies,
}: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  movies: any;
}) => {
  return (
    <div>
      <div className="landing-trending-header">
        <h1>Trending</h1>
        <div className="slider">
          <span
            onClick={() => setFilter("day")}
            className={filter === "day" ? "selected" : ""}
          >
            day
          </span>
          <span
            onClick={() => setFilter("week")}
            className={filter === "week" ? "selected" : ""}
          >
            week
          </span>
        </div>
      </div>
      <div className="trending-movies">
        {movies.trending.map((movie, i) => (
          <div key={i}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              ></img>
            </Link>
            <span>{movie.title}</span>
            <p>{movie.release_date}</p>
            <p>
              <span>{Math.round(movie.vote_average * 10) / 10} / 10</span> with{" "}
              {movie.vote_count} votes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
