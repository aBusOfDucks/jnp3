import { createSlice } from '@reduxjs/toolkit';

export const GEOLOCATION_REDUCER_NAME = 'geolocation'

const initialState = {
    loading: true,
    latitude: null,
    longitude: null,
    error: null,
};

export const geolocationSlice = createSlice({
    name: GEOLOCATION_REDUCER_NAME,
    initialState,
    reducers: {
        getUserLocationSuccess: (state, { payload }) => {
            state.loading = false;
            state.latitude = payload.latitude;
            state.longitude = payload.longitude;
            state.error = null;
        },
        getUserLocationFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        fetchUserLocation: (state) => {
            state.loading = true;
        },
    },
});

export const { getUserLocationSuccess, getUserLocationFailure, fetchUserLocation } = geolocationSlice.actions;

export const geolocationReducer = geolocationSlice.reducer;