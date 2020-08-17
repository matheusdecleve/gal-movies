import React, { useState } from "react";

import Search from "./components/Search";
import MovieList from "./components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const dataSearched = (data, state) => {
    setNotFound(state);

    if (data && !state) {
      setMovies(data);
    }
  };

  return (
    <div className="container">
      <Search info={dataSearched} />
      <MovieList movies={movies} error={notFound} />
    </div>
  );
};

export default Home;
