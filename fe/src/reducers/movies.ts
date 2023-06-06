import {
  GET_TRENDING,
  ERROR_MOVIES,
  Movies,
  Genres,
  MoviesDispatchTypes,
  GET_GENRESM,
  GET_MOVIES,
  GET_SEARCH,
  GET_MOVIEDETAILS,
  MovieDetails
} from "../actions/types";

interface DefaultStateI {
  trending: Movies[];
  loading: boolean;
  page: number | null;
  movies: Movies[];
  genres: Genres[];
  search: Movies[];
  details: MovieDetails | null;
}

const initialState: DefaultStateI = {
  trending: [],
  loading: true,
  page: null,
  movies: [],
  genres: [],
  search: [],
  details: null,
};

export default function (
  state: DefaultStateI = initialState,
  action: MoviesDispatchTypes
) {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...state,
        loading: false,
        trending: action.payload.results,
        page: action.payload.page,
      };
    case GET_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload.results,
        page: action.payload.page,
      };
    case GET_GENRESM:
      return {
        ...state,
        loading: false,
        genres: action.payload.genres,
      };
    case GET_SEARCH:
      return {
        ...state,
        loading: false,
        search: action.payload.results,
      };
    case GET_MOVIEDETAILS:
       return {
        ...state,
        loading: false,
        details: action.payload,
     };
    case ERROR_MOVIES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
