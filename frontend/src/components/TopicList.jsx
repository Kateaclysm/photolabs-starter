import React from "react";
import TopicListItem from './TopicListItem'
import "../styles/TopicList.scss";
import topics from '../mocks/topics';



const TopicList = (props) => {
  return (
  <ul className="top-nav-bar__topic-list">
    { topics.map((props) => {
      return (
        <li key={props.id} className="top-nav-bar__topic-list">
          <TopicListItem
            slug={props.slug}
            title={props.title}/>
        </li>
      )})
    }
  </ul>
  );
};

export default TopicList;
