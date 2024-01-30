import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState(false)
  return (
    <button className="photo-list__fav-icon" onClick={()=>{
      setLike(!like);
    }}>
      <FavIcon selected={like}/>
    </button>
  );
}

export default PhotoFavButton;