import React, { useContext } from 'react';

import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';
import TopicList from './TopicList';
import { myContext } from '../App';


const TopNavigation = () => {

  const {state, dispatch} = useContext(myContext);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavIcon selected={true} displayAlert={state.favoritePhotos.length > 0}/>
    
    </div>
  );
};



export default TopNavigation;