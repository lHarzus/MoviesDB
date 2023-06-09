export const GET_TRENDING = "GET_TRENDING";
export const ERROR_MOVIES = "ERROR_MOVIES";
export const ERROR_SERIES = "ERROR_SERIES";
export const GET_MOVIES = "GET_MOVIES";
export const GET_SERIES = "GET_SERIES";
export const GET_GENRESM = "GET_GENRESM";
export const GET_GENRESS = "GET_GENRESS";
export const GET_SERIESDETAILS = "GET_SERIESDETAILS";
export const GET_SERIESSIMILAR = "GET_SERIESSIMILAR";
export const GET_SERIESEPG = "GET_SERIESEPG";
export const GET_SERIESSEASON = "GET_SERIESSEASON";
export const GET_SEARCH = "GET_SEARCH";
export const GET_MOVIEDETAILS = "GET_MOVIEDETAILS";

//users

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const PROFILE_ERROR = "PROFILE_ERROR";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const ACCOUNT_DELETED = "ACCOUNT_DELETED";
export const GET_PROFILES = "GET_PROFILES";

//ALERT
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

//Movies types
export type Movies = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetails = {
  adult: string;
  backdrop_path: string;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  originak_title: string;
  overview: string;
  poster_path: string;
  release_date:string;
  revenue: number;
  runtime: number;
  status: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

//Movies interface

export interface MoviesError {
  type: typeof ERROR_MOVIES;
}

export interface GetMovies {
  type: typeof GET_TRENDING | typeof GET_MOVIES | typeof GET_SERIES;
  payload: {
    results: Movies[];
    page: number;
  };
}

export interface GetGenresMovies {
  type: typeof GET_GENRESM;
  payload: {
    genres: Genres[];
  };
}

export interface GetMovieDetails {
  type: typeof GET_MOVIEDETAILS;
  payload: {
    results: MovieDetails;
  };
}

//Series types
export type Series = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type EpisodeGroup = {
  description: string;
  group_count: number;
  id: string;
  name: string;
  network: Networks;
};

export type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  poster_path: string;
  season_number: number;
  overview: string;
};

export type SeriesDetails = {
  adult: string;
  backdrop_path: string;
  created_by: Writer[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  vote_average: number;
  vote_count: number;
  name: string;
  networks: Networks[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  overview: string;
  poster_path: string;
  seasons: Season[];
};

export type Episode = {
  air_date: string;
  episode_number: number;
  name: string;
  overview: string;
  runtime: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
};

export type SeasonDetails = {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  seaspm_number: number;
};

export type Search = {
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};

//Series interfaces

export interface GetSeriesSimilar {
  type: typeof GET_SERIESSIMILAR;
  payload: {
    results: Series[];
    page: number;
  };
}

export interface GetGenresSeries {
  type: typeof GET_GENRESS;
  payload: {
    genres: Genres[];
  };
}

export interface GetSeries {
  type: typeof GET_SERIES;
  payload: {
    results: Movies[];
    page: number;
  };
}

export interface GetSeriesDetails {
  type: typeof GET_SERIESDETAILS;
  payload: {
    results: SeriesDetails;
  };
}

export interface GetEpisodeGroups {
  type: typeof GET_SERIESEPG;
  payload: {
    results: EpisodeGroup[];
  };
}

export interface SeriesError {
  type: typeof ERROR_SERIES;
}

export interface GetSeasonDetails {
  type: typeof GET_SERIESSEASON;
  payload: {
    results: SeasonDetails;
  };
}



export interface GetSearch {
  type: typeof GET_SEARCH;
  payload: {
    results: Search;
  };
}

//Global
export type Writer = {
  id: number;
  credit_id: number;
  name: string;
  gender: number;
  profile_path: string;
};

export type Genres = {
  id: number;
  name: string;
};

export type Networks = {
  id: number;
  logo_path: string;
  name: string;
  country: string;
};

//Export types

export type MoviesDispatchTypes = GetMovies | MoviesError | GetGenresMovies | GetSearch | GetMovieDetails;

export type SeriesDispatchTypes =
  | SeriesError
  | GetGenresSeries
  | GetSeriesDetails
  | GetSeriesSimilar
  | GetEpisodeGroups
  | GetSeasonDetails
  | GetSeries;
