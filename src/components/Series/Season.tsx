import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Season = ({
  season,
  seasonDetails,
}: {
  season: any;
  seasonDetails: any;
}) => {
  return (
    <div className="episodes">
      <h1>
        Season {season.season_number} - {season.name}
      </h1>
      <h3>{season.air_date}</h3>
      {season.episodes.map((e) => (
        <div className="episode">
          <div>
            <img src={"https://image.tmdb.org/t/p/w500/" + e.still_path}></img>
          </div>
          <div>
            <div className="episode-header">
              <h1>{e.name}</h1>
              <span className="number-votes">{e.air_date}</span>
            </div>

            <h3>
              <i className="bi bi-star-fill"></i>{" "}
              {Math.round(e.vote_average * 10) / 10}/10{" "}
              <span className="number-votes">({e.vote_count})</span>
            </h3>
            <p>{e.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Season.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Season);
