import React from 'react';
// import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

import './App.scss';

// photos
// {photosArray.map((_, index) => (
//   <PhotoListItem key={index} sample={sampleDataForPhotoListItem} />
// ))}

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const numPhotos = 3;
  // const photosArray = Array.from({ length: numPhotos }); // Create an array with 3 undefined elements

  return (
    <div className="App">
 
      <PhotoFavButton/>
    </div>
  );
};

export default App;
