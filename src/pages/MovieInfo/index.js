import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieInfo = ({ match }) => {
  const id = match.params.id;

  const [info, setInfo] = useState([]);

  async function getInfo() {
    try {
      await axios
        .get(`http://www.omdbapi.com/?i=${id}&apikey=517a0b64&`)
        .then((res) => {
          res.data ? setInfo(res.data) : setInfo([]);
        });
    } catch (error) {
      console.error("Erro", error);
    }
  }

  useEffect(() => {
    const getData = async () => {
      getInfo();
    };
    getInfo();
  }, []);

  return (
    <div className="container flex">
      <div>
        <p>
          {info.Runtime} &bull; {info.Year} &bull; {info.Rated}
        </p>

        <h1>{info.Title}</h1>

        {/* <div className="flex">
              {ratings.map((rating) => {
                return (
                  <div>
                    <b>{rating.Source}</b>
                    <p>{rating.Value}</p>
                  </div>
                );
              })}
            </div> */}

        <b>Plot</b>
        <p>{info.Plot}</p>

        <div className="flex">
          <div>
            <b>Cast</b>
            <p>{info.Actors}</p>
          </div>
          <div>
            <b>Genre</b>
            <p>{info.Genre}</p>
          </div>
          <div>
            <b>Director</b>
            <p>{info.Director}</p>
          </div>
        </div>
      </div>

      <div>
        <img src={info.Poster} alt="" />
      </div>
    </div>
  );
};

export default MovieInfo;
