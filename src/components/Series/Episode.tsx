import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getSeriesSeason } from "../../actions/series";
import { connect } from "react-redux";

const Episode = ({ season }: { season: any }) => {
  const id = window.location.pathname.split("/")[2];
  const seasonNr = window.location.pathname.split("/")[4];

  useEffect(() => {
    getSeriesSeason(Number(id), Number(seasonNr));
  });

  return <div>Episode</div>;
};

Episode.propTypes = {
  getSeriesSeason: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  season: state.series.season,
});

export default connect(mapStateToProps, { getSeriesSeason })(Episode);
