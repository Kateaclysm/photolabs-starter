import React, { useState } from 'react';
import PhotoList from './components/PhotoList'
import photos from './mocks/photos'
import './App.scss';
import topics from './mocks/topics'
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
// Note: Rendering a single component to build components in isolation

const App = () => {

  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    
    setFavoritePhotos(prevFavorites => {
      return prevFavorites.includes(photoId) ? prevFavorites.filter(id => id !== photoId) :
      [...prevFavorites, photoId];
    })
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleFavorite={toggleFavorite} favPhotos={favoritePhotos}/>
      <PhotoDetailsModal/>
    </div>
  );
};

export default App;
