import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {
  return (
    <ul className="photo-list">
    {photos.map((photos) => {
      return (
        <PhotoListItem
        key={photos.id}
        mainImage={photos.urls.full}
        imageLocationCity={photos.location.city}
        imageLocationCountry={photos.location.country}
        userImage={photos.user.profile}
        userName={photos.user.username}/>
      )})
    }
    </ul>
  );
};

export default PhotoList;
