import React, { createContext, useState} from 'react';
import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
// import PhotoFavButton from './PhotoFavButton';

// const initialState = {
//   favouritePhotos: [],
//   setFavoritePhotos: () => []
// };

export const myContext = createContext();

const HomeRoute = () => {

  const [favoritePhotos, setFavoritePhotos] = useState([]);

  return (
    <myContext.Provider value={{favoritePhotos, setFavoritePhotos}}>
      <div className="home-route" >
        <TopNavigation />
        <PhotoList/>
      
      </div>
    </myContext.Provider>
  );

};

export default HomeRoute;