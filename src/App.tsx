import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Router/Home";
import Search from "./Router/Search";
import PopularVideoDetail from "./Router/PopularVideoDetail";
import { SearchVideoDetail } from "./Router/SearchVideoDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<PopularVideoDetail />} />
        <Route path="/search/:searchId" element={<SearchVideoDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
