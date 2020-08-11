import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = (props) => {
  const { imdbID, Title, Poster, Year, Type } = props.data;

  return (
    <div key={imdbID}>
      {Poster === "N/A" ? (
        <img src="https://placeimg.com/640/480/any" alt="" />
      ) : (
        <img src={Poster} alt="" />
      )}
      <h2>{Title}</h2>
      <p>{Year}</p>
      <FaHeart /> <FaRegHeart />
    </div>
  );
};

export default Movie;
