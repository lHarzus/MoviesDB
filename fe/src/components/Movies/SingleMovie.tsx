import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovieDetails } from "../../actions/movies";
import { Company } from "../Crew/Company";
import { Country } from "../Crew/Country";
import {
  getCurrentProfile,
  addMovie,
  deleteMovie,
} from "../../actions/profile";

const SingleMovie = ({
  profile,
  getCurrentProfile,
  addMovie,
  deleteMovie,
  auth: { isAuthenticated, loading },
  getMovieDetails,
  movies,
}: {
  profile: any;
  getCurrentProfile: any;
  auth: any;
  getMovieDetails: any;
  movies: any;
  addMovie: any;
  deleteMovie: any;
}) => {
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    getMovieDetails(id);
    getCurrentProfile();
  }, []);

  let isFavorite = false;
  if (!profile.loading) {
    profile.profile.movies.filter((movie) => {
      if (movie.id === id) isFavorite = true;
    });
  }

  if (!movies || !movies.details || loading) return <div>Loading </div>;
  return (
    <div className="singleSeries">
      <div className="ss-info">
        <div>
          <img
            src={
              "https://image.tmdb.org/t/p/w500/" + movies.details.poster_path
            }
          ></img>
        </div>
        <div>
          <h1>{movies.details.original_title}</h1>
          <p className="ss-date">
            Release date : {movies.details.release_date}
          </p>
          <p className="ss-vote">
            <i className="bi bi-star-fill star"></i>{" "}
            {Math.round(movies.details.vote_average * 10) / 10} / 10 with{" "}
            {movies.details.vote_count} votes
          </p>
          <a
            href={movies.details.homepage}
            className="homepage"
            target="_blank"
          >
            Movie homepage <i className="bi bi-arrow-right"></i>
          </a>
          <div>
            {isFavorite ? (
              <h3 onClick={() => deleteMovie(id)} className="addFavorite">
                <i className="bi bi-bookmark-fill bookmark"></i> Remove from
                favorites
              </h3>
            ) : (
              <h3 onClick={() => addMovie(id)} className="addFavorite">
                <i className="bi bi-bookmark bookmark"></i> Add to Favorites
              </h3>
            )}
          </div>
          <h2>Description</h2>
          <p>{movies.details.overview}</p>
          <h2>Information</h2>
          <h3>Revenue</h3> <span>{movies.details.revenue} $</span>
          <h3>Budget</h3> <span>{movies.details.budget} $</span>
          <h3>Run time</h3> <span>{movies.details.runtime} min</span>
          <h2>Production companies</h2>
          <div className="trending-movies">
            {movies.details.production_companies.map((c, i) => (
              <Company company={c} key={i} />
            ))}
          </div>
          <h2>Production countries</h2>
          <div className="trending-movies">
            {movies.details.production_countries.map((c, i) => (
              <Country country={c} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SingleMovie.propTypes = {
  getMovieDetails: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getMovieDetails,
  getCurrentProfile,
  addMovie,
  deleteMovie,
})(SingleMovie);
