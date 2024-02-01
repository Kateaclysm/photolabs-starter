import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
    {props.photos.map((props) => {
      return (
        <PhotoListItem
        key={props.photos.id}
        mainImage={props.photos.urls.full}
        imageLocationCity={props.photos.location.city}
        imageLocationCountry={props.photos.location.country}
        userImage={props.photos.user.profile}
        userName={props.photos.user.username}/>
      )})
    }
    </ul>
  );
};

export default PhotoList;
