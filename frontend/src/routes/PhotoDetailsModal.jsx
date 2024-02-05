import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
      isModalOpen ? (
      <div className="photo-details-modal">
      <section className="photo-details-modal__header">
        <section className="photo-details-modal_top-bar"/>
        <button className="photo-details-modal__close-button" onClick={closeModal} type="button">
        <img src={closeSymbol} alt="close symbol"/>
        </button>
        </section>
      <img className="photo-details-modal__image"/>
      <p className="photo-details-modal__photographer-details"/>
      </div>
    ) : null
  )
};

export default PhotoDetailsModal;
