import React, { useState } from "react";
import axios from "axios";

import Loader from "../Loader";

const Search = (props) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);

    await axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=517a0b64&`)
      .then((res) => {
        res.data.Search
          ? props.data(res.data.Search, false)
          : props.data("", true);
        setSearch("");
      });

    setLoading(false);
  }

  if (loading) {
    return <Loader />;
  } else {
    return (
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="O que você gostaria de assistir hoje?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    );
  }
};

export default Search;
