import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import { FaArrowLeft } from "react-icons/fa";
import Loader from '../Loader'

Modal.setAppElement("#root");

const InfoModal = (props) => {
  
  const [loading, setLoading] = useState(false)
  const [infoMovie, setInfoMovie] = useState([]);
  const [ratings, setRatings] = useState([]);

  async function afterOpenModal() {
    setLoading(true)
      await axios
        .get(`http://www.omdbapi.com/?i=${props.data}&apikey=517a0b64&`)
        .then((res) => {
          setRatings(res.data.Ratings);
          res.data ? setInfoMovie(res.data) : setInfoMovie([]);
        });
    setLoading(false)
  }

  const closeModal = () => {
    props.close(false)
  }

  return (
    <Modal
      isOpen={props.open}
      onAfterOpen={afterOpenModal}
      className="modal"
    >
      {loading ? <Loader /> : <div className="container flex">
        <div>
          <button onClick={() => closeModal()}><FaArrowLeft /></button>
          <p>
            {infoMovie.Runtime} &bull; {infoMovie.Year} &bull;{" "}
            {infoMovie.Rated}
          </p>

          <h1>{infoMovie.Title}</h1>

          <div className="flex">
            {ratings.map((rating, index) => {
              return (
                <div key={index}>
                  <b>{rating.Source}</b>
                  <p>{rating.Value}</p>
                </div>
              );
            })}
          </div>

          <b>Plot</b>
          <p>{infoMovie.Plot}</p>

          <div className="flex">
            <div>
              <b>Cast</b>
              <p>{infoMovie.Actors}</p>
            </div>
            <div>
              <b>Genre</b>
              <p>{infoMovie.Genre}</p>
            </div>
            <div>
              <b>Director</b>
              <p>{infoMovie.Director}</p>
            </div>
          </div>
        </div>

        <div>
          <img src={infoMovie.Poster} alt="" />
        </div>
      </div>}
    </Modal>
  );
};

export default InfoModal;
