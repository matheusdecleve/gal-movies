import React, { useState } from "react";

import Search from "./components/Search";
import Movie from "./components/Movie";
import Loader from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const isLoading = (loading) => {
    setLoading(loading);
  };
  const hasData = (data) => {
    setMovies(data);
    console.log(data);
  };

  return (
    <div className="container">
      <Search loading={isLoading} data={hasData} />
      <div className="moviesContainer">
        {loading === false ? (
          movies.map((movie) => {
            return <Movie data={movie} key={movie.imdbID} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default App;
