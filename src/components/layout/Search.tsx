import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { search } from "../../actions/movies";
import { connect } from "react-redux";
import { SeriesCard } from "../Series/SeriesCard";

const Search = ({ search, movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    search(query);
  }, []);

  if (!movies.search || movies.search.isEmpty) return <p>Loading</p>;
  return (
    <div className="search">
      <h1>Search Results</h1>
      <div className="display-series">
        {movies.search.map((s: any, i: number) => (
          <SeriesCard series={s} key={i} />
        ))}
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps, { search })(Search);
