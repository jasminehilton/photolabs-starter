import React, { useContext, useState } from 'react';

import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';
import {myContext} from './HomeRoute';



const PhotoFavButton = (props) => {
  const {favoritePhotos, setFavoritePhotos} = useContext(myContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleFavoriteClick = () => {
    const photoID = props.photoId;
    const isFavorite = favoritePhotos.filter((id) => id === photoID).length > 0;
    
    if (isFavorite) {
      setFavoritePhotos(favoritePhotos.filter((id) => id !== photoID));
    } else {
      setFavoritePhotos([...favoritePhotos, photoID]);
    }

    setIsLiked(!isLiked);
  };



  return (
    <div>
      <div>
        <button className="photo-list__fav-icon" onClick={handleFavoriteClick}>
          <FavIcon selected={isLiked} />
        </button>
      </div>
    </div>
  );
};

export default PhotoFavButton;