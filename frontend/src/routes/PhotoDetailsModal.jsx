import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  return (
    <div className="photo-details-modal">
      <section className="photo-details-modal__header"/>
      <section className="photo-details-modal_top-bar"/>
      <button className="photo-details-modal__close-button"/>
      <img src={closeSymbol} alt="close symbol" />
      
      <img className="photo-details-modal__image"/>
      <p className="photo-details-modal__photographer-details"/>
      
    </div>
  )
};

export default PhotoDetailsModal;
