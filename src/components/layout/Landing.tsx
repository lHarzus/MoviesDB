import React, { useEffect, useState } from "react";
import { MoviesLanding } from "../Landing/MoviesLanding";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTrending, getMoviePopular } from "../../actions/movies";
import { getSeriesPopular } from "../../actions/series";

const Landing = ({
  movies,
  series,
  getTrending,
  getMoviePopular,
  getSeriesPopular,
}: {
  movies: any;
  series: any;
  getTrending: any;
  getMoviePopular: any;
  getSeriesPopular: any;
}) => {
  const [filter, setFilter] = useState<string>("day");
  const [popularFilter, setPopularFilter] = useState<string>("movies");

  useEffect(() => {
    getTrending("all", filter);
    getMoviePopular();
    getSeriesPopular();
  }, [filter]);

  if (movies.loading) return <p>Loading</p>;

  return (
    <div className="landing">
      <div className="landing-search">
        <img></img>
        <h1>Welcome</h1>
        <h2>Milions of movies and series to discover. Explore now</h2>
        <div className="input-button">
          <input placeholder="Search for a movies/series"></input>
          <button className="btn">Search</button>
        </div>
      </div>
      <MoviesLanding
        filter={filter}
        setFilter={setFilter}
        movies={movies.trending}
        series={series.series}
        title={"Trending"}
        options={["day", "week"]}
      />

      <MoviesLanding
        filter={popularFilter}
        setFilter={setPopularFilter}
        movies={movies.movies}
        series={series.series}
        title={"What's Popular"}
        options={["movies", "series"]}
      />
    </div>
  );
};

Landing.propTypes = {
  getTrending: PropTypes.func.isRequired,
  getMoviePopular: PropTypes.func.isRequired,
  getSeriesPopular: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  movies: state.movies,
  series: state.series,
});

export default connect(mapStateToProps, {
  getTrending,
  getMoviePopular,
  getSeriesPopular,
})(Landing);
