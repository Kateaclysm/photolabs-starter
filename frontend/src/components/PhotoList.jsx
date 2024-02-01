import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
    {photos.map((props) => {
      return (
        <PhotoListItem
        key={props.id}
        mainImage={props.urls.full}
        imageLocationCity={props.location.city}
        imageLocationCountry={props.location.country}
        userImage={props.user.profile}
        userName={props.user.username}/>
      )})
    }
    </ul>
  );
};

export default PhotoList;
