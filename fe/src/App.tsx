import "./styles/styles.css";
import React, { useEffect } from "react";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import SingleSeries from "./components/Series/SingleSeries";
import Episode from "./components/Series/Episode";
import Search from "./components/layout/Search";
import SingleMovie from "./components/Movies/SingleMovie";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:param" element={<SingleSeries />} />
          <Route
            path="/series/:param/season/:param/episode/:param"
            element={<Episode />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:param" element={<SingleMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
