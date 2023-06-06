import {
  GET_TRENDING,
  ERROR_MOVIES,
  Movies,
  Genres,
  MoviesDispatchTypes,
  GET_GENRESM,
  GET_MOVIES,
  GET_SEARCH
} from "../actions/types";

interface DefaultStateI {
  trending: Movies[];
  loading: boolean;
  page: number | null;
  movies: Movies[];
  genres: Genres[];
  search: Movies[];
}

const initialState: DefaultStateI = {
  trending: [],
  loading: true,
  page: null,
  movies: [],
  genres: [],
  search: [],
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
    case ERROR_MOVIES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
