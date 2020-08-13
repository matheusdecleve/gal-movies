import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = (props) => {

  const { imdbID, Title, Poster, Year } = props.movie;

  const [loved, setLoved] = useState(
    imdbID === localStorage.getItem(imdbID) ? true : false
  );

  const loveThisPost = () => {
    let heartButton = document.getElementById(imdbID);

    if (loved) {
      localStorage.removeItem(imdbID);
      heartButton.classList.remove("loved");
      setLoved(false);
    } else {
      localStorage.setItem(imdbID, imdbID);
      heartButton.classList.add("loved");
      setLoved(true);
    }
  };

  const selectMovie = (id) => {
    props.selected(id);
  }

  return (
    <div className="movie">
      {Poster === "N/A" ? (
        <img src="https://placeimg.com/640/480/any" alt="" />
      ) : (
        <img src={Poster} alt="" />
      )}
      <div className="content">
        <b>{Title}</b>
        <p>{Year}</p>
        <button type="button" onClick={() => selectMovie(imdbID)}>Abrir modal</button>
      </div>
      <button
        type="button"
        className={loved ? "loved heart" : "heart"}
        id={imdbID}
        onClick={() => loveThisPost()}
      >
        {loved ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Movie;
