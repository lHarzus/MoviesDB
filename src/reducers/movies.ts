import {
  GET_TRENDING,
  ERROR_MOVIES,
  Movies,
  Genres,
  MoviesDispatchTypes,
  GET_GENRESM,
  GET_MOVIES,
} from "../actions/types";

interface DefaultStateI {
  trending: Movies[];
  loading: boolean;
  page: number | null;
  movies: Movies[];
  genres: Genres[];
}

const initialState: DefaultStateI = {
  trending: [],
  loading: true,
  page: null,
  movies: [],
  genres: [],
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
    case ERROR_MOVIES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
