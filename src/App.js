import React, { useState } from "react";

import Search from "./components/Search";
import MovieList from "./components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const dataSearched = (data) => {
    setMovies(data);
  };

  return (
    <div className="container">
      <Search data={dataSearched} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
