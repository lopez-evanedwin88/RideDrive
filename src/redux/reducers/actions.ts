import {createAction} from '@reduxjs/toolkit';
import {Status} from '../../constants/RideStatus';

export const addMarker = createAction<any>('addMarker');
export const removeMarker = createAction<number>('removeMarker');
export const updateStatus = createAction<{id: number; status: Status}>(
  'updateStatus',
);
export const updateDriver = createAction<{id: number; driverId: string}>(
  'updateDriver',
);
