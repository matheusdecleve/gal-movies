import React, { useState } from "react";
import axios from "axios";

// Importa o ícone do coração e seta esquerda.
import { FaArrowLeft, FaHeart } from "react-icons/fa";

// Importa o react modal.
import Modal from "react-modal";

// Importa a imagem padrão - exibe quando o filme não tem imagem.
import DefaultImage from "../../assets/defaultimage.jpg";

// Importa o componente Loader.
import Loader from "../Loader";

// Seta a div principal para o modal
Modal.setAppElement("#root");

const InfoModal = ({ id, open, close }) => {
  // Variável que guarda o estado de loading, função que altera o loading.
  const [loading, setLoading] = useState(false);
  // Variável que guarda as informações do filme, função que altera as informações.
  const [infoMovie, setInfoMovie] = useState([]);
  // Variável que guarda as avaliações, função que altera as avaliações.
  const [ratings, setRatings] = useState([]);
  // Variável que guarda o estado de favorito, função que altera os favoritos.
  const [loved, setLoved] = useState();

  // Função que executa ao abrir o modal - busca as informações do filme selecionado e exibe no modal.
  async function afterOpenModal() {
    // Inicia o loading.
    setLoading(true);

    await axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=517a0b64&`)
      .then((res) => {
        // Atualiza as informações do filme.
        setInfoMovie(res.data);
        // Atualiza os ratings do filme.
        setRatings(res.data.Ratings);
        // Altera o estado de favorito do filme.
        setLoved(localStorage.getItem(id) ? true : false);
      });

    // Finaliza o loading.
    setLoading(false);
  }

  // Função que altera o favorito do filme (Favoritar/Desfavoritar).
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

  // Função que fecha o modal
  const closeModal = () => {
    close(false);
  };

  // Exibe o loading quando a página estiver carregando.
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

            <div className="modal__info__runtimeYearRated">
              <span>{infoMovie.Runtime}</span>
              <span>{infoMovie.Year}</span>
              <span>{infoMovie.Rated}</span>
            </div>

            <div className="modal__info__title">
              <h1>{infoMovie.Title}</h1>
            </div>

            <div className="modal__info__ratings">
              {ratings.map((item) => {
                return (
                  <div
                    key={item.Source}
                    className={`modal__info__ratings--rating ${item.Source}`}
                  >
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
                    <p>Remove from favorites</p>
                  ) : (
                    <p>Add to favorites</p>
                  )}
                </button>
              </div>
            </div>

            <div className="modal__info__plot">
              <b>Plot</b>
              <p>{infoMovie.Plot}</p>
            </div>

            <div className="modal__info__castGenreDirector">
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
