import React from "react";
import "../styles/PhotoListItem.scss";
import "../components/PhotoFavButton"
import "../components/FavIcon";
import PhotoFavButton from "../components/PhotoFavButton";
import "../components/PhotoList"

const PhotoListItem = (props) => {

  return (
  <div className="photo-list__item">
    <div>
    <PhotoFavButton/>
    </div>
    <img src={props.mainImage} alt="Main" className="photo-list__image"></img>
    <div className="photo-list__user-info">
      <img src={props.userImage} className="photo-list__user-profile"></img>
      <p>{props.userName}</p>
      <p className="photo-list__user-location">{props.imageLocationCity}, {props.imageLocationCountry}</p>
    </div>
  </div>
  )
};

export default PhotoListItem;
