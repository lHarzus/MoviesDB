import axios from "axios";
import { Dispatch } from "redux";
import {
  ERROR_SERIES,
  GET_GENRESS,
  GET_SERIES,
  GET_SERIESDETAILS,
  GET_SERIESSIMILAR,
  GET_SERIESEPG,
  GET_SERIESSEASON,
  SeriesDispatchTypes,
} from "./types";
import { fetchDataFromApi } from "../utils/api";

//Get series
//sort_by types: revenue, popularity, primary_release_date, vote_average, vote_count
export const getSeries =
  (
    page: number = 1,
    sort_by: string = "vote_count.desc",
    language: string = "en-US",
    include_adult: string = "false",
    include_video: string = "false"
  ) =>
  async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/discover/tv", {
        include_adult,
        include_video,
        language,
        page,
        sort_by,
      }).then((response) => {
        dispatch({
          type: GET_SERIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

export const getSeriesGenres =
  (language: string = "en-US") =>
  async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/genre/tv/list", { language }).then(
        (response) => {
          dispatch({
            type: GET_GENRESS,
            payload: response,
          });
        }
      );
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get series airing today
export const getSeriesAiringToday =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/airing_today", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_SERIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get series on the air
export const getSeriesOnTheAir =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/on_the_air", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_SERIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get popular series
export const getSeriesPopular =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/popular", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_SERIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get popular series
export const getSeriesTopRated =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/top_rated", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_SERIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get series details
export const getSeriesDetails =
  (id) => async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/" + id, {}).then((response) => {
        dispatch({
          type: GET_SERIESDETAILS,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get series similar
export const getSeriesSimilar =
  (id) => async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/" + id + "/similar", {}).then(
        (response) => {
          dispatch({
            type: GET_SERIESSIMILAR,
            payload: response,
          });
        }
      );
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get Series episode groups
export const getSeriesEpisodeGroups =
  (id: number) => async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/" + id + "/episode_groups", {}).then(
        (response) => {
          dispatch({
            type: GET_SERIESEPG,
            payload: response,
          });
        }
      );
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };

//Get series season
export const getSeriesSeason =
  (id: number, season: number) =>
  async (dispatch: Dispatch<SeriesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/tv/" + id + "/season/" + season, {}).then(
        (response) => {
          dispatch({
            type: GET_SERIESSEASON,
            payload: response,
          });
        }
      );
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_SERIES,
      });
    }
  };
