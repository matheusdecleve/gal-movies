import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import { FaArrowRight } from "react-icons/fa";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    backgroundColor: "#111",
    color: "#fff",
  },
};

const InfoModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [infoMovie, setInfoMovie] = useState([]);
  const [ratings, setRatings] = useState([]);

  function afterOpenModal() {
    console.log("opened");
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function openModal() {
    await axios
      .get(`http://www.omdbapi.com/?i=${props.id}&apikey=517a0b64&`)
      .then((res) => {
        setRatings(res.data.Ratings);
        res.data ? setInfoMovie(res.data) : setInfoMovie([]);
      });
    setIsOpen(true);
  }

  return (
    <>
      <button className="openModal" onClick={openModal}>
        <FaArrowRight />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={infoMovie.Title}
      >
        <button onClick={closeModal}>close</button>
        <div className="container flex">
          <div>
            <p>
              {infoMovie.Runtime} &bull; {infoMovie.Year} &bull;{" "}
              {infoMovie.Rated}
            </p>

            <h1>{infoMovie.Title}</h1>

            <div className="flex">
              {ratings.map((rating) => {
                return (
                  <div>
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
        </div>
      </Modal>
    </>
  );
};

export default InfoModal;
