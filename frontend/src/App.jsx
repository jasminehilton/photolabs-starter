import React, {useState, createContext, useReducer} from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { photoLabReducer } from 'hooks/useApplicationData';

export const initialState = {
  favoritePhotos: [],
  selectedPhoto: null,
  selectedTopicId: null
};

export const myContext = createContext();
// Note: Rendering a single component to build components in isolation
const App = () => {
  const [state, dispatch] = useReducer(photoLabReducer, initialState);

  return (
    <myContext.Provider value={{state, dispatch}}>
      <div className="App">
        <HomeRoute />
        {state.selectedPhoto !== null ? <PhotoDetailsModal data={state.selectedPhoto} /> : null}
      </div>
    </myContext.Provider>
  );
};

export default App;
