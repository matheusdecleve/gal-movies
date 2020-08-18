import React from "react";

// Importa a imagem de loading.
import Loading from "../../assets/loader.gif";

const Loader = () => {
  return <img src={Loading} className="loading" alt="Loading... please wait" />;
};

export default Loader;
