import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { markersReducer } from './reducers/markerReducers';

const rootReducer = combineReducers({
    markers: markersReducer,
    // Add other reducers here if you have them
  });
  
  export const store = configureStore({
    reducer: rootReducer,
  });