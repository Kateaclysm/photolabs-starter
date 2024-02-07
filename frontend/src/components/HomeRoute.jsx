import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';


const HomeRoute = (props) => {
  return (
  <div className="home-route">
    <TopNavigation topics={props.topics} favPhotos={props.favPhotos}/>
    <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} favPhotos={props.favPhotos} onPhotoClick={props.openModalWithPhoto}/>
    {props.isModalOpen && <PhotoDetailsModal photo={props.selectedPhoto} favPhotos={props.favPhotos} closeModal={props.closeModal} toggleFavorite={props.toggleFavorite}/>}
  </div>
  ) 
}


export default HomeRoute;