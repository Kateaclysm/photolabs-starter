import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  return (
  <div className="home-route">
    <TopNavigation topics={props.topics}/>
    <PhotoList photos={props.photos}/>
  </div>
  )
}


export default HomeRoute;