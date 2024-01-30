import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
    <img src={props.sampleData.imageSource} alt="Main" className="photo-list__image"></img>
    <div className="photo-list__user-info">
    <img src={props.sampleData.profile} className="photo-list__user-profile"></img>
    <p>{props.sampleData.username}</p>
    <p className="photo-list__user-location">{props.sampleData.location.city}, {props.sampleData.location.country}</p>
    </div>
    </div>
  )
};

export default PhotoListItem;
