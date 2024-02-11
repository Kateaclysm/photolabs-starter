import React from "react";
import './TopicList'
import "../styles/TopicListItem.scss";


const TopicListItem = ({id, slug, title, fetchTopicPhotos}) => {
  return (
    <div className="topic-list__item">
    <span onClick={() => fetchTopicPhotos(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
 