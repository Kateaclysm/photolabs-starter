import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  return (
  <div className="home-route">
    <TopNavigation topics={props.topics} favPhotos={props.favPhotos}/>
    <PhotoList photos={props.photos} toggleFavorite={props.toggleFavorite} favPhotos={props.favPhotos}/>
  </div>
  )
}


export default HomeRoute;