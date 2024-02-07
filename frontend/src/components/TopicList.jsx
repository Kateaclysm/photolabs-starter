import React from "react";
import TopicListItem from './TopicListItem'
import "../styles/TopicList.scss";



const TopicList = ({topics, favPhotos, fetchTopicPhotos}) => {
  return (
  <ul className="top-nav-bar__topic-list">
    {topics.map((topic) => {
      return (
        <li key={topic.id} className="top-nav-bar__topic-list">
          <TopicListItem
            id={topic.id}
            slug={topic.slug}
            title={topic.title}
            fetchTopicPhotos={fetchTopicPhotos}/>
        </li>
      )})
    }
  </ul>
  );
};

export default TopicList;
