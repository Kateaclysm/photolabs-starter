import React from "react";
import './TopicList'
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item &:hover">
    <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
