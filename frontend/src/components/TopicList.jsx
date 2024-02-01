import React from "react";
import TopicListItem from './TopicListItem'
import "../styles/TopicList.scss";



const TopicList = (props) => {
  return (
  <ul className="top-nav-bar__topic-list">
    { props.topics.map((topic) => {
      return (
        <li key={topic.id} className="top-nav-bar__topic-list">
          <TopicListItem
            slug={topic.slug}
            title={topic.title}/>
        </li>
      )})
    }
  </ul>
  );
};

export default TopicList;
