import React, { useContext, useEffect, useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import axios from "axios";
import { myContext } from "App";



const PhotoList = () => {

  const [photos, setPhotos] = useState([]);
  const {state, dispatch} = useContext(myContext);

  const getPhotos = () => {
    axios.get('http://localhost:8001/api/photos')
      .then((res) => {
        setPhotos(res.data);
      }).catch((err) => {
        console.log('error getting photos ', err);
      });
  };

  const getPhotosByTopic = () => {
    axios.get(`http://localhost:8001/api/topics/photos/${state.selectedTopic}`)
      .then((res) => {
        setPhotos(res.data);
      }).catch((err) => {
        console.log('error getting photos ', err);
      });
  };

  // run it for any event that happens to test, but if test is true then only load photos
  useEffect(() => {
    if (state.selectedTopic > 0) {
      getPhotosByTopic();
    } else {
      getPhotos();
    }
  }, [state.selectedTopic]);

  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <PhotoListItem key={index} data={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
