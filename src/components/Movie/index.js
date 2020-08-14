import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import DefaultImage from '../../assets/defaultimage.jpg';

const Movie = (props) => {
  const { imdbID, Title, Poster, Year } = props.movie; 

  const [loved, setLoved] = useState(localStorage.getItem(imdbID) !== null ? true : false);

  const loveThisPost = () => {
    if (loved) {
      localStorage.removeItem(imdbID);
      setLoved(false);
    } else {
      localStorage.setItem(imdbID, imdbID);
      setLoved(true);
    }
  };

  const selectMovie = (id) => {
    props.selected(id);
  }

  return (
    <div className="movie">     
      {Poster === "N/A" || "" ? (
        <img src={DefaultImage} alt="Capa do filme" title="Imagem não disponível" />
      ) : (
        <img src={Poster} alt="Capa do filme" title={Title} />
      )}
      <div className="movie__content">
        <b>{Title}</b>
        <p>{Year}</p>        
      </div>
      <button 
        type="button" 
        className="movie__openModal"
        onClick={() => selectMovie(imdbID)}>
      </button>
      <button
        type="button"
        className={`heart heart--${loved}`}
        id={imdbID}
        onClick={() => loveThisPost()}>
        <FaHeart />
      </button>
    </div>
  );
};

export default Movie;
