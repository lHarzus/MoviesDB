import {
  ERROR_SERIES,
  Genres,
  SeriesDispatchTypes,
  GET_GENRESS,
  GET_SERIES,
  GET_SERIESDETAILS,
  GET_SERIESSIMILAR,
  GET_SERIESEPG,
  GET_SERIESSEASON,
  SeriesDetails,
  SeasonDetails,
  EpisodeGroup,
  Series,
} from "../actions/types";

interface DefaultStateI {
  loading: boolean;
  page: number | null;
  series: Series[];
  genres: Genres[];
  seriesDetails: SeriesDetails | null;
  similar: Series[];
  episodeGroup: EpisodeGroup[];
  season: SeasonDetails | null;
}

const initialState: DefaultStateI = {
  loading: true,
  page: null,
  series: [],
  genres: [],
  seriesDetails: null,
  similar: [],
  episodeGroup: [],
  season: null,
};

export default function (
  state: DefaultStateI = initialState,
  action: SeriesDispatchTypes
) {
  switch (action.type) {
    case GET_SERIES:
      return {
        ...state,
        loading: false,
        series: action.payload.results,
        page: action.payload.page,
      };
    case GET_GENRESS:
      return {
        ...state,
        loading: false,
        genres: action.payload.genres,
      };

    case GET_SERIESDETAILS:
      return {
        ...state,
        loading: false,
        seriesDetails: action.payload,
      };
    case GET_SERIESSIMILAR:
      return {
        ...state,
        loading: false,
        similar: action.payload.results,
        page: action.payload.page,
      };
    case GET_SERIESEPG:
      return {
        ...state,
        loading: false,
        episodeGroup: action.payload.results,
      };
    case GET_SERIESSEASON:
      return {
        ...state,
        loading: false,
        season: action.payload,
      };

    case ERROR_SERIES:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
