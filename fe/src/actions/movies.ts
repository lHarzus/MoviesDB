import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_TRENDING,
  ERROR_MOVIES,
  GET_GENRESM,
  GET_MOVIES,
  GET_SEARCH,
  GET_MOVIEDETAILS,
  MoviesDispatchTypes,
} from "./types";
import { fetchDataFromApi } from "../utils/api";

//Get trending movies for the day or week
//type can be all / movie /tv
export const getTrending =
  (type: string = "all", timeWindow: string = "day", page: number = 1) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/trending/" + type + "/" + timeWindow, {
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_TRENDING,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };
//Get movies
//sort_by types: revenue, popularity, primary_release_date, vote_average, vote_count
export const getMovies =
  (
    page: number = 1,
    sort_by: string = "popularity.desc",
    language: string = "en-US",
    include_adult: string = "false",
    include_video: string = "false"
  ) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/discover/movie", {
        include_adult,
        include_video,
        language,
        page,
        sort_by,
      }).then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };

export const getMoviesGenres =
  (language: string = "en-US") =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/genre/movie/list", { language }).then(
        (response) => {
          dispatch({
            type: GET_GENRESM,
            payload: response,
          });
        }
      );
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };

//Get movies in the cinema
export const getMovieNowPlaying =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/movie/now_playing", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };

//Get popular movies
export const getMoviePopular =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/movie/popular", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };

//Get top rated movies
export const getMovieTopRated =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/movie/top_rated", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };

//Get upcoming movies
export const getMovieUpComing =
  (language: string = "en-US", page: number = 1) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi("/movie/top_rated", {
        language,
        page: page,
      }).then((response) => {
        dispatch({
          type: GET_MOVIES,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };

//Search movie by name
export const search =
(query : string) =>
async (dispatch: Dispatch<MoviesDispatchTypes>) => {
  try {
    const data = fetchDataFromApi("/search/movie",{
      query,
    }).then((response) => {
      dispatch({
        type: GET_SEARCH,
        payload: response,
      });
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ERROR_MOVIES,
    });
  }
};

//Get movie details
export const getMovieDetails =
  (
    id: number,
    language: string = "en-US",
  ) =>
  async (dispatch: Dispatch<MoviesDispatchTypes>) => {
    try {
      const data = fetchDataFromApi(`/movie/${id}`, {
        language,
      }).then((response) => {
        dispatch({
          type: GET_MOVIEDETAILS,
          payload: response,
        });
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR_MOVIES,
      });
    }
  };