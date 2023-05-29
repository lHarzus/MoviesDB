import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getSeriesDetails,
  getSeriesSimilar,
  getSeriesSeason,
  getSeriesEpisodeGroups,
} from "../../actions/series";

const SingleSeries = ({
  getSeriesDetails,
  getSeriesSimilar,
  getSeriesEpisodeGroups,
  getSeriesSeason,
  series,
}: {
  getSeriesDetails: any;
  getSeriesSimilar: any;
  getSeriesEpisodeGroups: any;
  getSeriesSeason: any;
  series: any;
}) => {
  const id = window.location.pathname.split("/")[2];
  const [seasonNr, setSeasonNr] = useState(1);

  useEffect(() => {
    getSeriesDetails(id);
    getSeriesSimilar(id);
    getSeriesEpisodeGroups(id);
  }, []);

  useEffect(() => {
    getSeriesSeason(id, seasonNr);
  }, [seasonNr]);

  if (!series.seriesDetails) return <div>Loading</div>;
  return (
    <div className="singleSeries">
      <div className="ss-info">
        <div>
          <img
            src={
              "https://image.tmdb.org/t/p/w500/" +
              series.seriesDetails.poster_path
            }
          ></img>
        </div>
        <div>
          <h1>{series.seriesDetails.original_name}</h1>
          <p className="ss-date">
            {series.seriesDetails.first_air_date} to{" "}
            {series.seriesDetails.last_air_date
              ? series.seriesDetails.last_air_date
              : "current"}
          </p>
          <p className="ss-vote">
            {" "}
            {Math.round(series.seriesDetails.vote_average * 10) / 10} / 10 with{" "}
            {series.seriesDetails.vote_count} votes
          </p>
          <h2>Description</h2>
          <p>{series.seriesDetails.overview}</p>
        </div>
      </div>
      <h2>Seasons</h2>
      <div className="ss-seasons">
        {series.seriesDetails.seasons.map((s, i) => (
          <p
            key={i}
            className={seasonNr === i ? "selected" : ""}
            onClick={() => setSeasonNr(i)}
          >
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};

SingleSeries.propTypes = {
  getSeriesDetails: PropTypes.func.isRequired,
  getSeriesSimilar: PropTypes.func.isRequired,
  getSeriesEpisodeGroups: PropTypes.func.isRequired,
  getSeriesSeason: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  series: state.series,
});

export default connect(mapStateToProps, {
  getSeriesDetails,
  getSeriesSimilar,
  getSeriesEpisodeGroups,
  getSeriesSeason,
})(SingleSeries);
