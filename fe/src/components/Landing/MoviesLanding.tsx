import React from "react";
import { Link } from "react-router-dom";

export const MoviesLanding = ({
  filter,
  setFilter,
  movies,
  series,
  title,
  options,
}: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  movies: any;
  series: any;
  title: string;
  options: string[];
}) => {
  return (
    <div>
      <div className="landing-trending-header">
        <h1>{title}</h1>
        <div className="slider">
          {options.map((opt) => (
            <span
              key={opt}
              onClick={() => setFilter(opt)}
              className={filter === opt ? "selected" : ""}
            >
              {opt}
            </span>
          ))}
        </div>
      </div>
      <div className="trending-movies">
        {filter !== "series" ? (
          <>
            {movies.map((movie, i) => (
              <div key={i}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  ></img>
                </Link>
                <span>{movie.title}</span>
                <p>{movie.release_date}</p>
                <p>
                  <span>{Math.round(movie.vote_average * 10) / 10} / 10</span>{" "}
                  with {movie.vote_count} votes
                </p>
              </div>
            ))}
          </>
        ) : (
          <>
            {series.map((s, i) => (
              <div key={i}>
                <Link to={`/s/${s.id}`}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + s.poster_path}
                  ></img>
                </Link>
                <span>{s.title}</span>
                <p>{s.release_date}</p>
                <p>
                  <span>{Math.round(s.vote_average * 10) / 10} / 10</span> with{" "}
                  {s.vote_count} votes
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
