import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

// TopNavigation is used to sort and display all of the components meant to be used at the "top" of the app view, in a similar sense as the "Homeroute" component does.
const TopNavigation = ({topics, favPhotos, fetchTopicPhotos}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchTopicPhotos={fetchTopicPhotos}/>
      <FavBadge isFavPhotoExist={favPhotos.length > 0}/>
    </div>
  )
};

export default TopNavigation;