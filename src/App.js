import React, { useState } from "react";

import Search from "./components/Search";
import NotFound from "./components/NotFound";
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
      <Search data={dataSearched} />
      {notFound ? <NotFound /> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
