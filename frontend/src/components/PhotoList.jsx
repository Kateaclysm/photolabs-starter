import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, toggleFavorite, favPhotos, onPhotoClick, }) => {
  return (
    <ul className="photo-list">
    {photos.map((photo) => {
      return (
        <PhotoListItem
        key={photo.id}
        photoId={photo.id}
        mainImage={photo.urls.full}
        imageLocationCity={photo.location.city}
        imageLocationCountry={photo.location.country}
        userImage={photo.user.profile}
        userName={photo.user.username}
        toggleFavorite={toggleFavorite}
        favPhotos={favPhotos}
        onClick={()=> onPhotoClick(photo)}/>
      )})
    }
    </ul>
  );
};

export default PhotoList;
