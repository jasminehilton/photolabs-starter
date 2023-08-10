import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  return (
    <div className=" photo-list photo-list__item photo-list:after " >
      <img alt="main pic" className="photo-list__image" src={props.sample.imageSource}></img>        <br/>
      <img alt="profile pic" className="photo-list__user-profile" src={props.sample.profile}></img>
      <div className="photo-list__user-info photo-list__user-details" >
        {props.sample.username}
      </div>
      <div className="photo-list__user-location" >
        {props.sample.location.city}, {props.sample.location.country}
      </div>
    </div>
  );
};

export default PhotoListItem;
