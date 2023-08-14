import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {



  return (
    <div className=" photo-list__item " >
      <PhotoFavButton photoId={props.data.id}/>
      <img alt="main pic" className="photo-list__image" src={props.data.urls.regular}></img>
      <br/>
      <img alt="profile pic" className="photo-list__user-profile" src={props.data.user.profile}></img>
      <div className="photo-list__user-info photo-list__user-details" >
        {props.data.user.username}
      </div>
      <div className="photo-list__user-location" >
        {props.data.location.city}, {props.data.location.country}
      </div>
    </div>
  );
};

export default PhotoListItem;
