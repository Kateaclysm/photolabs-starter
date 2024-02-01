import React from "react";
import TopicListItem from './TopicListItem'
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  return (
  <ul className="top-nav-bar__topic-list">
    { sampleDataForTopicList.map((topic) => {
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
