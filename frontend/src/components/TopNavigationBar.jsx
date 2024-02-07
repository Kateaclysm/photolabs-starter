import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

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