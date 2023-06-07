import { combineReducers } from "redux";
import movies from "./movies";
import series from "./series";
import auth from "./auth";
import profile from "./profile"
import alert from "./alert"

export default combineReducers({
  movies,
  series,
  auth,
  profile,
  alert
});
