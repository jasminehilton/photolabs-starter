import React, { useContext } from 'react';

import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';
import TopicList from './TopicList';
import { myContext } from './HomeRoute';


const TopNavigation = () => {

  const {favoritePhotos} = useContext(myContext);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      Total liked photos - {favoritePhotos.length}
      <TopicList />
      <FavIcon selected={true} />
    
    </div>
  );
};

export default TopNavigation;