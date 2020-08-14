import React, { useState } from 'react';
import Movie from '../Movie';
import InfoModal from "../InfoModal";

const MovieList = ({movies}) => {

  const [selectedMovie, setSelectedMovie] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const selectMovie = (movie) => {
    setSelectedMovie(movie)
    setVisibleModal(true)
  }

  return (
    <>
      <div className="containerFlex">
        {
          movies.map((item) => {
            return <Movie movie={item} key={item.imdbID} selected={selectMovie} />;
          })
        }
      </div>
      <InfoModal data={selectedMovie} open={visibleModal} close={setVisibleModal} />
    </>
  )
}

export default MovieList