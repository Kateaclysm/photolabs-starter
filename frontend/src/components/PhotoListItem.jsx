import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div>
    <img src={props.sampleData.imageSource}></img>
    <img src={props.sampleData.profile}></img>
    <h1>{props.sampleData.username}</h1>
    <p>{props.sampleData.location.city}, {props.sampleData.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
