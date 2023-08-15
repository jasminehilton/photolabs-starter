import React, { useContext } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import { myContext } from 'App';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';
import { ACTIONS } from 'hooks/useApplicationData';

const PhotoDetailsModal = (props) => {
  const {state, dispatch} = useContext(myContext);

  const handleClose = () => {
    dispatch({type: ACTIONS.SELECT_PHOTO, value: null});
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: false});
  };

  console.log(props.data);
  console.log(state.selectedPhoto);

  return (
    <div className="photo-details-modal ">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-list__item photo-details-modal__image_container" >
        <img alt="main pic" className="photo-details-modal__image" src={props.data.urls.regular}></img>
        <PhotoFavButton photoId={props.data.id}/>
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

      <br/>
      <header className='.photo-details-modal__header'></header>
      <div>
        <ul className="photo-list photo-details-modal__images">
          {props.data.similar_photos.map((photo, index) => (
            <PhotoListItem key={index} data={photo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
