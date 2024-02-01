import React, { useCallback, useState } from 'react';
import './PhotoListItem'
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photoId, toggleFavorite, liked}) {
  // const [like, setLike] = useState(false)
  return (
    <button className="photo-list__fav-icon" onClick={()=> toggleFavorite(photoId)}>
      <FavIcon selected={liked}/>
    </button>
  );
}

export default PhotoFavButton;