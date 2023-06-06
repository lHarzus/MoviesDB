import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  ACCOUNT_DELETED,
  CLEAR_PROFILE,
} from "./types";

//Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get profile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Create or update profile
export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("/api/profile", formData, config);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(
        console.log(edit ? "Profile updated" : "Profile created", "success")
      ); //set an alert

      if (!edit) {
        //if we're creating a new profile we get redirected
        history("/");
      }
    } catch (err) {
      const erros = err.response.data.erros;

      if (erros) {
        erros.forEach((error) => dispatch(console.log(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

//Add movie
export const addMovie = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put("/api/profile/movie", formData, config);
    
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    const erros = err.response.data.erros;

    if (erros) {
      erros.forEach((error) => dispatch(console.log(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete movie
export const deleteMovie = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/movie/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    const erros = err.response.data.erros;

    if (erros) {
      erros.forEach((error) => dispatch(console.log(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Account and profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are you sure ? This cannot be undone!")) {
    try {
      await axios.delete(`/api/profile`);

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });
    } catch (err) {
      const erros = err.response.data.erros;

      if (erros) {
        erros.forEach((error) => dispatch(console.log(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

//Add series
export const addSeries = (formData) => async (dispatch) => {
    try {
      console.log(formData);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const res = await axios.put("/api/profile/series", formData, config);
      
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      const erros = err.response.data.erros;
  
      if (erros) {
        erros.forEach((error) => dispatch(console.log(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  //Delete series
  export const deleteSeries = (id) => async (dispatch) => {
    try {
      const res = await axios.delete(`/api/profile/series/${id}`);
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      const erros = err.response.data.erros;
  
      if (erros) {
        erros.forEach((error) => dispatch(console.log(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };