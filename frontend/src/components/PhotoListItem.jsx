import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { myContext } from "App";
import { ACTIONS } from "hooks/useApplicationData";



const PhotoListItem = (props) => {
  const {state, dispatch} = useContext(myContext);

  const handleClick = () => {
    dispatch({type: ACTIONS.SELECT_PHOTO, value: props.data});
  };

  return (
    <div className="photo-list__item " >
      <PhotoFavButton photoId={props.data.id}/>
      <img alt="main pic" className="photo-list__image " src={props.data.urls.regular} onClick={handleClick}>
      </img>
      <br/>
      <div className="photo-list__user-details" >
        <img alt="profile pic" className="photo-list__user-profile" src={props.data.user.profile}></img>
        <div className="photo-list__user-info" >
          {props.data.user.username}
          <div className="photo-list__user-location" >
            {props.data.location.city}, {props.data.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
