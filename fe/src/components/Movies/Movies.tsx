import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movies";
import { Filter } from "../Functional/Filter";
import { SeriesCard } from "../Series/SeriesCard";
import { Pagination } from "../Functional/Pagination";

const Movies = ({ getMovies, movies }: { getMovies: any; movies: any }) => {
  const [filter, setFilter] = useState({
    sortType: "vote_count",
    sort: "desc",
    adult: "false",
    video: "false",
  });

  const [page, setPage] = useState(1);

  const { sortType, sort, adult, video } = filter;

  useEffect(() => {
    getMovies(page, sortType + "." + sort, "en-US", adult, video);
  }, [filter, page]);

  const submitSorter = (e, newSorter) => {
    e.preventDefault();
    setFilter(newSorter);
  };

  return (
    <div className="movies">
      <Filter submitSorter={submitSorter} />
      <div className="display-series">
        {movies.movies.map((s: any, i: number) => (
          <SeriesCard series={s} key={i} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { getMovies })(Movies);
