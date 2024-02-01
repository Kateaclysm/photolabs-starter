import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute'

const HomeRoute = () => {
  return (
    <span className=".home-route">
    <TopNavigation/>
    <PhotoList/>
    </span>
  )
}