import React, { useState } from "react";

// Importa os componentes.
import Movie from "../Movie";
import InfoModal from "../InfoModal";
import NotFound from "../NotFound";

const MovieList = ({ movies, error }) => {
  // Variável que guarda o filme selecionado, função que altera o filme selecionado.
  const [selectedMovie, setSelectedMovie] = useState([]);
  // Variável que guarda o estado do modal, função que altera o estado do modal.
  const [visibleModal, setVisibleModal] = useState(false);

  // Abre o modal automaticamente quando o filme é escolhido
  const selectMovie = (movie) => {
    setSelectedMovie(movie);
    setVisibleModal(true);
  };

  // Se não encontrou nenhum filme exibe o componente "NotFound"
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
