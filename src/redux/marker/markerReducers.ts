import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Status } from '../../constants/rideStatus';

interface PickupLocation {
    latitude: number;
    longitude: number;
  }
  
  interface Destination {
    latitude: number;
    longitude: number;
  }
  
  interface Marker {
    id: number;
    userId: string;
    driverId: string | null;
    pickupLocation: PickupLocation;
    destination: Destination;
    status: Status;
    pickupTime: Date;
    timestamp: Date;
    name: string;
    description: string;
    miles: number;
  }

interface MarkersState {
  markers: Marker[];
}

const initialState: MarkersState = {
    markers: [
        { 
          id: 1,
          userId: 'user1',
          driverId: null,
          pickupLocation: { latitude: 37.78825, longitude: -122.4324 },
          destination: { latitude: 37.78725, longitude: -122.4334 },
          status: Status.PENDING,
          pickupTime: new Date(),
          timestamp: new Date(),
          name: 'John Doe',
          description: "Hi! Good day! I'm here. Location: Golden Gate Bridge",
          miles: 5,
        },
        { 
          id: 2,
          userId: 'user2',
          driverId: null,
          pickupLocation: { latitude: 37.79025, longitude: -122.4344 },
          destination: { latitude: 37.78925, longitude: -122.4354 },
          status: Status.PENDING,
          pickupTime: new Date(),
          timestamp: new Date(),
          name: 'Jane Smith',
          description: "Hi! Good day! I'm here. Location: Alcatraz Island",
          miles: 10,
        },
        { 
          id: 3,
          userId: 'user3',
          driverId: null,
          pickupLocation: { latitude: 37.78725, longitude: -122.4344 },
          destination: { latitude: 37.78625, longitude: -122.4354 },
          status: Status.PENDING,
          pickupTime: new Date(),
          timestamp: new Date(),
          name: 'Michael Johnson',
          description: "Hi! Good day! I'm here. Location: Fisherman's Wharf",
          miles: 15,
        },
        { 
          id: 4,
          userId: 'user4',
          driverId: null,
          pickupLocation: { latitude: 37.78625, longitude: -122.4364 },
          destination: { latitude: 37.78525, longitude: -122.4374 },
          status: Status.PENDING,
          pickupTime: new Date(),
          timestamp: new Date(),
          name: 'Emily Brown',
          description: "Hi! Good day! I'm here. Location: Lombard Street",
          miles: 20,
        },
        { 
          id: 5,
          userId: 'user5',
          driverId: null,
          pickupLocation: { latitude: 37.78525, longitude: -122.4384 },
          destination: { latitude: 37.78425, longitude: -122.4394 },
          status: Status.PENDING,
          pickupTime: new Date(),
          timestamp: new Date(),
          name: 'David Wilson',
          description: "Hi! Good day! I'm here. Location: Palace of Fine Arts",
          miles: 25,
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
