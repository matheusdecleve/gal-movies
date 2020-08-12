import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [search, setSearch] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    props.loading(true);

    await axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=517a0b64&`)
      .then((res) => {
        res.data.Search ? props.data(res.data.Search) : props.data([]);
      });

    setSearch("");
    props.loading(false);
  }

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Pesquise o filme"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Procurar" />
    </form>
  );
};

export default Search;
