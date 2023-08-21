import React, { useContext, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
import { myContext} from '../App';
import {  ACTIONS } from 'hooks/useApplicationData';

const PhotoFavButton = (props) => {
  const {state, dispatch} = useContext(myContext);

  const isFavourite = () => {
    return state.favoritePhotos.filter((id) => id === props.photoId).length > 0;
  };

  // handles the click event and stores the id of liked photo
  const handleFavoriteClick = () => {
    if (isFavourite()) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, value: props.photoId});
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, value: props.photoId});
    }
  };

  return (
    <button className="photo-list__fav-icon" onClick={handleFavoriteClick}>
      <FavIcon selected={isFavourite()} />
    </button>
  );
};

export default PhotoFavButton;