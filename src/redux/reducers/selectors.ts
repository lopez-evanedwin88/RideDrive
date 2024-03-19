import { createSelector } from '@reduxjs/toolkit';

// Select markers slice from state
const selectMarkers = (state: any) => state.markers.markers;

// Select a specific marker by its ID
export const selectMarkerById = (id: number) =>
  createSelector(
    [selectMarkers],
    (markers) => markers.find((marker: any) => marker.id === id)
  );