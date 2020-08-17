import React, { useState } from "react";

import Movie from "../Movie";
import InfoModal from "../InfoModal";
import NotFound from "../NotFound";

const MovieList = ({ movies, error }) => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    setVisibleModal(true);
  };

  if (error) {
    return <NotFound />;
  } else {
    return (
      <div className="movies">
        {movies.map((item) => {
          return (
            <Movie key={item.imdbID} movie={item} selected={selectMovie} />
          );
        })}
        <InfoModal
          id={selectedMovie}
          open={visibleModal}
          close={setVisibleModal}
        />
      </div>
    );
  }
};

export default MovieList;
