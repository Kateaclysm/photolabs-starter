import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
    <TopNavigation/>
    <PhotoList/>
    </div>
  )
}


export default HomeRoute;