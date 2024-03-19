import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Marker {
  id: number;
  latitude: number;
  longitude: number;
  name: string; // Name for a person
  description: string; // Description with customized text
}

interface MarkersState {
  markers: Marker[];
}

const initialState: MarkersState = {
  markers: [
    {
      id: 1,
      latitude: 37.78825,
      longitude: -122.4324,
      name: 'John Doe',
      description: "Hi! I'm here. Location: Golden Gate Bridge",
    },
    {
      id: 2,
      latitude: 37.78925,
      longitude: -122.4344,
      name: 'Jane Smith',
      description: "Hi! I'm here. Location: Alcatraz Island",
    },
    {
      id: 3,
      latitude: 37.78725,
      longitude: -122.4334,
      name: 'Michael Johnson',
      description: "Hi! I'm here. Location: Fisherman's Wharf",
    },
    {
      id: 4,
      latitude: 37.78625,
      longitude: -122.4354,
      name: 'Emily Brown',
      description: "Hi! I'm here. Location: Lombard Street",
    },
    {
      id: 5,
      latitude: 37.78525,
      longitude: -122.4364,
      name: 'David Wilson',
      description: "Hi! I'm here. Location: Palace of Fine Arts",
    },
  ],
};

const markersSlice = createSlice({
  name: 'markers',
  initialState,
  reducers: {
    addMarker(state, action: PayloadAction<Marker>) {
      state.markers.push(action.payload);
    },
    removeMarker(state, action: PayloadAction<number>) {
      state.markers = state.markers.filter(
        marker => marker.id !== action.payload,
      );
    },
  },
});

export const {addMarker, removeMarker} = markersSlice.actions;
export default markersSlice.reducer;
