import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getSeries,
  getSeriesPopular,
  getSeriesAiringToday,
  getSeriesTopRated,
} from "../../actions/series";
import { connect } from "react-redux";
import { DisplaySeries } from "./DisplaySeries";

const Series = ({
  getSeries,
  getSeriesPopular,
  getSeriesAiringToday,
  getSeriesTopRated,
  series,
}: {
  getSeries: any;
  getSeriesPopular: any;
  getSeriesAiringToday: any;
  getSeriesTopRated: any;
  series: any;
}) => {
  const [type, setType] = useState("all");

  useEffect(() => {
    if (type === "all") getSeries();
    if (type === "popular") getSeriesPopular();
    if (type === "today") getSeriesAiringToday();
    if (type === "top") getSeriesTopRated();
  }, [type]);

  const onClick = (newType) => {
    if (newType !== type) setType(newType);
  };

  return (
    <div className="landing">
      <div className="series-type">
        <p
          onClick={() => onClick("all")}
          className={type === "all" ? " selected" : ""}
        >
          All
        </p>
        <p
          onClick={() => onClick("popular")}
          className={type === "popular" ? " selected" : ""}
        >
          Popular
        </p>
        <p
          onClick={() => onClick("today")}
          className={type === "today" ? " selected" : ""}
        >
          Airing Today
        </p>
        <p
          onClick={() => onClick("top")}
          className={type === "top" ? " selected" : ""}
        >
          Top Rated
        </p>
      </div>
      {type === "all" ? (
        <DisplaySeries series={series.series} filter={true} />
      ) : (
        <DisplaySeries series={series.series} filter={false} />
      )}
    </div>
  );
};

Series.propTypes = {
  getSeries: PropTypes.func.isRequired,
  getSeriesAiringToday: PropTypes.func.isRequired,
  getSeriesPopular: PropTypes.func.isRequired,
  getSeriesTopRated: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  series: state.series,
});

export default connect(mapStateToProps, {
  getSeries,
  getSeriesAiringToday,
  getSeriesPopular,
  getSeriesTopRated,
})(Series);
