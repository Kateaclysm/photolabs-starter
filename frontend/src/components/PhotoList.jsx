import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
    {props.photos.map((photo) => {
      return (
        <PhotoListItem
        key={photo.id}
        photoId={photo.id}
        mainImage={photo.urls.full}
        imageLocationCity={photo.location.city}
        imageLocationCountry={photo.location.country}
        userImage={photo.user.profile}
        userName={photo.user.username}
        toggleFavorite={props.toggleFavorite}
        favPhotos={props.favPhotos}/>
      )})
    }
    </ul>
  );
};

export default PhotoList;
