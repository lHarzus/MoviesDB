import "./styles/styles.css";
import React from "react";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import SingleSeries from "./components/Series/SingleSeries";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:param" element={<SingleSeries />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
