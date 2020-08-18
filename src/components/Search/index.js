import React, { useState } from "react";
import axios from "axios";

// Importa o componente Loader.
import Loader from "../Loader";

const Search = ({ info }) => {
  // Variável que guarda o estado de loading, função que altera o estado do loading.
  const [loading, setLoading] = useState(false);
  // Variável que guarda o termo buscado, função que altera o termo buscado.
  const [search, setSearch] = useState("");

  // Função que chama a API e devolve os itens buscados.
  async function handleSearch(e) {
    // Impede que a página recarregue.
    e.preventDefault();
    // Inicia o loading.
    setLoading(true);

    await axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=517a0b64&`)
      .then((res) => {
        // Chama a função "dataSearched" no componente App passando os filmes buscados.
        res.data.Search ? info(res.data.Search, false) : info("", true);
        // Limpa o input do form.
        setSearch("");
      });

    // Finaliza o loading.
    setLoading(false);
  }

  // Exibe o loading se o estado do mesmo for positivo, caso negativo, exibe o formulário.
  if (loading) {
    return <Loader />;
  } else {
    return (
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="What would you like to watch today?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    );
  }
};

export default Search;
