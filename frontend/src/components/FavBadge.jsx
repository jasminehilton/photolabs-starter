import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge fav-badge__count">
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;