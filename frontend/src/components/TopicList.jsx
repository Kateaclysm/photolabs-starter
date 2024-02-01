import React from "react";
import TopicListItem from './TopicListItem'
import "../styles/TopicList.scss";
import topics from '../mocks/topics';



const TopicList = (props) => {
  return (
  <ul className="top-nav-bar__topic-list">
    { props.topics.map((props) => {
      return (
        <li key={props.topics.id} className="top-nav-bar__topic-list">
          <TopicListItem
            slug={props.topics.slug}
            title={props.topics.title}/>
        </li>
      )})
    }
  </ul>
  );
};

export default TopicList;
