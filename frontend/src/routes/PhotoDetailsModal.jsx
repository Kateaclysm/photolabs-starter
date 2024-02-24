import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList'

const PhotoDetailsModal = (props) => {


  return (
      <div className="photo-details-modal">
        <section className="photo-details-modal_top-bar"/>
        <button className="photo-details-modal__close-button" onClick={props.closeModal} type="button">
        <img src={closeSymbol} alt="close symbol"/>
        </button>
        <section className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={props.photo.urls.full}/>
        </section>
        {
      }
      <section className="photo-details-modal__images">
      <img className="photo-details-modal__photographer-profile" src={props.photo.user.profile}/>
      <p className="photo-details-modal__photographer-info">{props.photo.user.username}</p>
      <p className="photo-details-modal__photographer-location">
      {props.photo.location.country}, {props.photo.location.city}</p>
      <p className="photo-details-modal__header">Similar Photos</p>
      </section>
      <PhotoList photos={Object.values(props.photo.similar_photos)} favPhotos={props.favPhotos} toggleFavorite={props.toggleFavorite}/>
      </div>
  )
};

export default PhotoDetailsModal;
