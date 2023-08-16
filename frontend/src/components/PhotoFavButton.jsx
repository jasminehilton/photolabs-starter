import React, { useContext, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
import { myContext} from '../App';
import {  ACTIONS } from 'hooks/useApplicationData';



const PhotoFavButton = (props) => {
  const {state, dispatch} = useContext(myContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleFavoriteClick = () => {
    const photoID = props.photoId;
    const isFavorite = state.favoritePhotos.filter((id) => id === photoID).length > 0;
    
    if (isFavorite) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, value: photoID});
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, value: photoID});
    }
    setIsLiked(!isLiked);
  };



  return (
    <button className="photo-list__fav-icon" onClick={handleFavoriteClick}>
      <FavIcon selected={isLiked} />
    </button>
  );
};

export default PhotoFavButton;