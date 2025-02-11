import React, { useState } from 'react';
import PhotoList from './components/PhotoList'
import photos from './mocks/photos'
import './App.scss';
import topics from './mocks/topics'
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  
const { state, toggleFavorite, openModalWithPhoto, closeModal, fetchTopicPhotos} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      photos={state.photoData} 
      topics={state.topicData} 
      toggleFavorite={toggleFavorite} 
      favPhotos={state.favoritePhotos} 
      openModalWithPhoto={openModalWithPhoto} 
      isModalOpen={state.isModalOpen}
      closeModal={closeModal}
      selectedPhoto={state.selectedPhoto}
      fetchTopicPhotos={fetchTopicPhotos}/>
    </div>
  );
};

export default App;
