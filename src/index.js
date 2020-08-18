import React from "react";
import ReactDOM from "react-dom";

// Importa o componente principal.
import App from "./App";

// Importa os estilos globais da aplicação.
import "./global.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
