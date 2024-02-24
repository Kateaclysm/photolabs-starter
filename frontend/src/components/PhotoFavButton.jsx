import React, { useCallback, useState } from 'react';
import './PhotoListItem'
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// PhotoFavButton includes the FavIcon component in order to pass down the state of if a photo is liked or not.
function PhotoFavButton({photoId, toggleFavorite, liked}) {
  return (
    <button className="photo-list__fav-icon" onClick={()=> toggleFavorite(photoId)}>
      <FavIcon selected={liked}/>
    </button>
  );
}

export default PhotoFavButton;