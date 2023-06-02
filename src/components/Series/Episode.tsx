import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getSeriesSeason } from "../../actions/series";
import { connect } from "react-redux";

const Episode = ({
  season,
  getSeriesSeason,
}: {
  season: any;
  getSeriesSeason: any;
}) => {
  const id = window.location.pathname.split("/")[2];
  const seasonNr = window.location.pathname.split("/")[4];
  const episodeNr = window.location.pathname.split("/")[6];

  useEffect(() => {
    getSeriesSeason(Number(id), Number(seasonNr));
  }, []);

  if (!season) return <p>Loading</p>;

  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w500/" + season.poster_path}></img>
    </div>
  );
};

Episode.propTypes = {
  getSeriesSeason: PropTypes.func.isRequired,
  series: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  season: state.series.season,
});

export default connect(mapStateToProps, { getSeriesSeason })(Episode);
