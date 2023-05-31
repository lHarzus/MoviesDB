import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Season = ({
  season,
  id,
  seasonNr,
}: {
  season: any;
  id: string;
  seasonNr: number;
}) => {
  if (!season) return <div>Loading</div>;
  return (
    <div className="episodes">
      <h1>{season.name}</h1>
      <h3>{season.air_date}</h3>
      {season.episodes.map((e) => (
        <Link
          to={`/series/${id}/season/${seasonNr}/episode/${e.episode_number}`}
          className="episode"
        >
          <div>
            <img src={"https://image.tmdb.org/t/p/w500/" + e.still_path}></img>
          </div>
          <div className="episode-info">
            <div className="episode-header">
              <h1>{e.name}</h1>
              <span className="number-votes">{e.air_date}</span>
            </div>

            <h3>
              <i className="bi bi-star-fill star"></i>{" "}
              {Math.round(e.vote_average * 10) / 10}/10{" "}
              <span className="number-votes">({e.vote_count})</span>
            </h3>
            <p>{e.overview}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

Season.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Season);
