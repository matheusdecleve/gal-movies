import React from "react";

// Esse componente é exibido caso a busca traga nenhum resultado.
const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Oops! :(</h1>
      <p>The movie you are looking for is not available.</p>
    </div>
  );
};

export default NotFound;
