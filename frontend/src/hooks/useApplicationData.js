export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC'
};

export const photoLabReducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favoritePhotos: [...state.favoritePhotos, action.value]
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favoritePhotos: state.favoritePhotos.filter((photoId) => photoId !== action.value)
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photos: action.value
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topics: action.value
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhoto: action.value
    };
  case ACTIONS.SELECT_TOPIC:
    return {
      ...state,
      selectedTopic: action.value
    };
  }
  return state;
};
