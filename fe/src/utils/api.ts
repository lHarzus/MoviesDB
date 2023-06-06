import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "f1e017a267bdff0e79102c719b2383bf";

const headers = {
  api_key: TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(
      BASE_URL + url + "?api_key=f1e017a267bdff0e79102c719b2383bf",
      { params }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
