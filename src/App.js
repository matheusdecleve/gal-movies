import React, { useState } from "react";

// Importa os componentes.
import Search from "./components/Search";
import MovieList from "./components/MovieList";

const Home = () => {
  // Variável que guarda os filmes, função que altera os filmes.
  const [movies, setMovies] = useState([]);
  // Variável que guarda o estado do erro, função que altera o erro.
  const [notFound, setNotFound] = useState(false);

  // Função que altera o estado do "NotFound" e seta os filmes - essa função é chamada pela props do componente Search pois é dele que vem a pesquisa.
  const dataSearched = (data, state) => {
    setNotFound(state);

    // Adiciona os filmes na variável movies somente se a busca tiver resultados.
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
