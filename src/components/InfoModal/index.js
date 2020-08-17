import React, { useState } from "react";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import axios from "axios";
import Modal from "react-modal";

import DefaultImage from "../../assets/defaultimage.jpg";
import Loader from "../Loader";

Modal.setAppElement("#root");

const InfoModal = ({ id, open, close }) => {
  const [loading, setLoading] = useState(false);
  const [infoMovie, setInfoMovie] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [loved, setLoved] = useState();

  async function afterOpenModal() {
    setLoading(true);

    await axios
      .get(`http://www.omdbapi.com/?i=${id}&apikey=517a0b64&`)
      .then((res) => {
        setInfoMovie(res.data);
        setRatings(res.data.Ratings);
        setLoved(localStorage.getItem(id) ? true : false);
      });

    setLoading(false);
  }

  const loveThisPost = () => {
    let heartButton = document.getElementById(id);

    if (loved) {
      localStorage.removeItem(id);
      heartButton.classList.remove("heart--true");
      heartButton.classList.add("heart--false");
      setLoved(false);
    } else {
      localStorage.setItem(id, id);
      heartButton.classList.remove("heart--false");
      heartButton.classList.add("heart--true");
      setLoved(true);
    }
  };

  const closeModal = () => {
    close(false);
  };

  return (
    <Modal onAfterOpen={afterOpenModal} isOpen={open} className="modal">
      {loading ? (
        <Loader />
      ) : (
        <div className="container flexContainer">
          <div className="modal__info">
            <button className="modal__back" onClick={() => closeModal()}>
              <FaArrowLeft />
            </button>

            <b>
              {infoMovie.Runtime} - {infoMovie.Year} -{" "}
              <span> {infoMovie.Rated}</span>
            </b>

            <h1>{infoMovie.Title}</h1>

            <div className="modal__info__ratings">
              {ratings.map((item) => {
                return (
                  <div>
                    <b>{item.Source}</b>
                    <p>{item.Value}</p>
                  </div>
                );
              })}
              <div>
                <button
                  type="button"
                  className={`heart heart--${loved}`}
                  id={infoMovie.imdbID}
                  onClick={() => loveThisPost()}
                >
                  <FaHeart />{" "}
                  {loved ? (
                    <p>Remover dos favoritos</p>
                  ) : (
                    <p>Adicionar aos favoritos</p>
                  )}
                </button>
              </div>
            </div>

            <div className="modal__info__plot">
              <b>Plot</b>
              <p>{infoMovie.Plot}</p>
            </div>

            <div className="modal__info__cgd">
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

          {infoMovie.Poster === "N/A" ? (
            <div
              className="modal__image"
              style={{ backgroundImage: `url(${DefaultImage})` }}
            ></div>
          ) : (
            <div
              className="modal__image"
              style={{ backgroundImage: `url(${infoMovie.Poster})` }}
            ></div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default InfoModal;
