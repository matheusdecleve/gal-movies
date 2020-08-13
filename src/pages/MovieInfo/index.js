import React from "react";
import { useLocation } from "react-router-dom";

const MovieInfo = () => {
  const location = useLocation();

  return <h2>Item: {location.pathname}</h2>;
};

export default MovieInfo;
