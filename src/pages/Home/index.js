import React, { useState } from "react";

import Loader from "../../components/Loader";
import Search from "../../components/Search";
import Movie from "../../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const isLoading = (loading) => {
    setLoading(loading);
  };
  const hasData = (data) => {
    setMovies(data);
  };

  return (
    <div className="container">
      <Search loading={isLoading} data={hasData} />
      <div className="containerFlex">
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
};

export default Home;
