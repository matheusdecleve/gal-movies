import React, { useState } from "react";

// Importa o ícone de coração.
import { FaHeart } from "react-icons/fa";

// Importa a imagem padrão.
import DefaultImage from "../../assets/defaultimage.jpg";

const Movie = ({ movie, selected }) => {
  const { imdbID, Title, Poster, Year } = movie;

  // Variável que guarda se o filme é favorito ou não, função que altera o favorito do filme.
  const [loved, setLoved] = useState(
    localStorage.getItem(imdbID) !== null ? true : false
  );

  // Função que altera o favorito do filme (Favoritar/Desfavoritar)
  const loveThisPost = () => {
    if (loved) {
      localStorage.removeItem(imdbID);
      setLoved(false);
    } else {
      localStorage.setItem(imdbID, imdbID);
      setLoved(true);
    }
  };

  // Função que seleciona o filme escolhido e passa para o componente "InfoModal"
  const selectMovie = (id) => {
    selected(id);
  };

  return (
    <div className="movie">
      {Poster === "N/A" || "" ? (
        <img
          src={DefaultImage}
          alt="Capa do filme"
          title="Imagem não disponível"
        />
      ) : (
        <img src={Poster} alt="Capa do filme" title={Title} />
      )}
      <div className="movie__content">
        <h1>{Title}</h1>
        <p>{Year}</p>
      </div>
      <button
        type="button"
        className="movie__openModal"
        onClick={() => selectMovie(imdbID)}
      ></button>
      <button
        type="button"
        className={`heart heart--${loved}`}
        id={imdbID}
        onClick={() => loveThisPost()}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default Movie;
