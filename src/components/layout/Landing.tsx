import React, { useEffect, useState } from "react";
import { Trending } from "../Landing/Trending";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTrending, getMovies, getMoviesGenres } from "../../actions/movies";
import { getSeries, getSeriesGenres } from "../../actions/series";

const Landing = ({
  movies,
  getTrending,
  getMovies,
  getSeries,
  getMoviesGenres,
  getSeriesGenres,
}: {
  movies: any;
  getTrending: any;
  getMovies: any;
  getSeries: any;
  getMoviesGenres: any;
  getSeriesGenres: any;
}) => {
  const [filter, setFilter] = useState<string>("day");

  useEffect(() => {
    getTrending();
    getMovies();
    getSeries();
    getSeriesGenres();
    getMoviesGenres();
  }, [filter]);

  return (
    <div className="landing">
      <div className="landing-search">
        <h1>Welcome</h1>
        <h2>Milions of movies and series to discover. Explore now</h2>
        <div className="input-button">
          <input placeholder="Search for a movies/series"></input>
          <button className="btn">Search</button>
        </div>
      </div>
      <Trending filter={filter} setFilter={setFilter} movies={movies} />
    </div>
  );
};

Landing.propTypes = {
  getTrending: PropTypes.func.isRequired,
  auth: PropTypes.object,
  getMovies: PropTypes.func.isRequired,
  getSeries: PropTypes.func.isRequired,
  getMoviesGenres: PropTypes.func.isRequired,
  getSeriesGenres: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {
  getTrending,
  getMovies,
  getSeries,
  getMoviesGenres,
  getSeriesGenres,
})(Landing);
