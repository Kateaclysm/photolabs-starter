import React from "react";
import "../styles/PhotoListItem.scss";
import "../components/PhotoFavButton"
import "../components/FavIcon";
import PhotoFavButton from "../components/PhotoFavButton";
import "../components/PhotoList"

const PhotoListItem = (props) => {
  const liked = props.favPhotos.find((photo) => {
    return (photo === props.photoId)
  })
  return (
  <div className="photo-list__item">
    <div>
    <PhotoFavButton liked={liked} toggleFavorite={props.toggleFavorite} photoId={props.photoId}/>
    </div>
    <img src={props.mainImage} alt="Main" className="photo-list__image" onClick={props.onClick}></img>
    <div className="photo-list__user-info">
      <img src={props.userImage} className="photo-list__user-profile"></img>
      <p>{props.userName}</p>
      <p className="photo-list__user-location">{props.imageLocationCity}, {props.imageLocationCountry}</p>
    </div>
  </div>
  )
};

export default PhotoListItem;
