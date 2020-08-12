import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import InfoModal from "../InfoModal";

const Movie = (props) => {
  const { imdbID, Title, Poster, Year } = props.data;

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
      </div>
      <button
        type="button"
        className={loved ? "loved" : ""}
        id={imdbID}
        onClick={() => loveThisPost()}
      >
        {loved ? <FaHeart /> : <FaRegHeart />}
      </button>
      <InfoModal id={imdbID} />
    </div>
  );
};

export default Movie;
