import { configureStore } from '@reduxjs/toolkit';
import markerReducers from './marker/markerReducers';

const store = configureStore({
  reducer: {
    markers: markerReducers,
  },
});

export default store;