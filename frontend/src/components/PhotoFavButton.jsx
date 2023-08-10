import React, { useCallback, useState } from 'react';


import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';



const PhotoFavButton = () => {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <div>
        <button className="photo-list__fav-icon" onClick={() => setIsLiked(!isLiked) }>
          <FavIcon selected={isLiked} />
        </button>
      </div>
    </div>
  );
};

export default PhotoFavButton;