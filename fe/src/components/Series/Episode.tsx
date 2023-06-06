import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getSeriesSeason } from "../../actions/series";
import { connect } from "react-redux";
import { Crew } from "../Crew/Crew";
import { Actor } from "../Crew/Actor";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Episode = ({
  series,
  getSeriesSeason,
}: {
  series: any;
  getSeriesSeason: any;
}) => {
  const id = window.location.pathname.split("/")[2];
  const seasonNr = window.location.pathname.split("/")[4];
  const episodeNr = Number(window.location.pathname.split("/")[6]);

  const navigate = useNavigate();

  useEffect(() => {
    getSeriesSeason(Number(id), Number(seasonNr));
  }, []);

  const onChange = (side) => {
    const size = series.season ? series.season.episodes.length : 0;
    if (side === "right" && Number(episodeNr) < size)
      navigate(
        `/series/${id}/season/${seasonNr}/episode/${Number(episodeNr) + 1}`
      );
    if (side === "left" && Number(episodeNr) > 1)
      navigate(
        `/series/${id}/season/${seasonNr}/episode/${Number(episodeNr) - 1}`
      );
  };

  if (!series.season || series.loading) return <p>Loading</p>;

  return (
    <div className="ep-info">
      <Link to={`/series/${id}`} className="go-back">
        &lt; Go Back
      </Link>
      <h1>{series.season.episodes[episodeNr - 1].name}</h1>
      <p>
        {Math.round(series.season.episodes[episodeNr - 1].vote_average * 10) /
          10}
        /10 <i className="bi bi-star-fill star"></i> -{" "}
        {series.season.episodes[episodeNr - 1].vote_count} votes
      </p>
      <div className="episode-header">
        <img
          src={
            "https://image.tmdb.org/t/p/w500/" +
            series.season.episodes[episodeNr - 1].still_path
          }
        ></img>
        <div>
          <span>
            Episode {episodeNr} - Season{" "}
            {series.season.episodes[episodeNr - 1].season_number} |{" "}
          </span>
          <i
            className="bi bi-caret-left-fill"
            onClick={() => onChange("left")}
          ></i>
          <span>Change episode</span>
          <i
            className="bi bi-caret-right-fill"
            onClick={() => onChange("right")}
          ></i>
          <p>{series.season.episodes[episodeNr - 1].air_date}</p>
          <p>{series.season.episodes[episodeNr - 1].overview}</p>
        </div>
      </div>
      <h2>Crew</h2>
      <div className="trending-movies">
        {series.season.episodes[episodeNr - 1].crew.map((c, i) => (
          <Crew crew={c} key={i} />
        ))}
      </div>
      <h2>Guest Stars</h2>
      <div className="trending-movies">
        {series.season.episodes[episodeNr - 1].guest_stars.map((a, i) => (
          <Actor actor={a} key={i} />
        ))}
      </div>
    </div>
  );
};

Episode.propTypes = {
  getSeriesSeason: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  series: state.series,
});

export default connect(mapStateToProps, { getSeriesSeason })(Episode);
