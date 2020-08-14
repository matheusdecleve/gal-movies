import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

import { FaArrowLeft, FaHeart } from "react-icons/fa";
import DefaultImage from '../../assets/defaultimage.jpg';
import Loader from '../Loader'

Modal.setAppElement("#root");

const InfoModal = (props) => {
  
  const [loading, setLoading] = useState(false)
  const [infoMovie, setInfoMovie] = useState([]);
  const [loved, setLoved] = useState();

  async function afterOpenModal() {
    setLoading(true)

    await axios
      .get(`http://www.omdbapi.com/?i=${props.data}&apikey=517a0b64&`)
      .then((res) => {
        setInfoMovie(res.data);
      });

    setLoved(localStorage.getItem(props.data) ? true : false)
    setLoading(false)
  }

  const loveThisPost = () => {
    let heartButton = document.getElementById(props.data);

    if (loved) {
      localStorage.removeItem(props.data);
      heartButton.classList.remove("heart--true");
      heartButton.classList.add("heart--false");
      setLoved(false);
    } else {
      localStorage.setItem(props.data, props.data);
      heartButton.classList.remove("heart--false");
      heartButton.classList.add("heart--true");
      setLoved(true);
    }
  };

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
        <div className="modal__info">
          <button className="modal__back" onClick={() => closeModal()}><FaArrowLeft /></button>

          <b>{infoMovie.Runtime} &bull; {infoMovie.Year} &bull; <span> {infoMovie.Rated}</span></b>

          <h1>{infoMovie.Title}</h1>

          <div className="flex">
            <div>
              <b>IMDb</b>
              <p>{infoMovie.imdbRating}/10</p>
            </div>    
            <div>
              <b>Rotten Tomatoes</b>
              <p></p>
            </div>      
            <div>
              <button
                type="button"
                className={`heart heart--${loved}`}
                id={infoMovie.imdbID}
                onClick={() => loveThisPost()}
              >
                <FaHeart /> {loved ? <p>Remover dos favoritos</p> : <p>Adicionar aos favoritos</p>}
              </button>
            </div>  
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

        <div className="modal__image">
          {infoMovie.Poster === "N/A" ? (
            <img src={DefaultImage} alt="Capa do filme" title="Imagem não disponível" />
          ) : (
            <img src={infoMovie.Poster} alt="Capa do filme" title={infoMovie.Title} />
          )}
        </div>
      </div>}
    </Modal>
  );
};

export default InfoModal;
