import { createSlice } from '@reduxjs/toolkit';

export const OVERPASS_REDUCER_NAME = 'overpass'

const initialState = {
    data: [],
    loading: true,
    error: null,
    bounds: null,
};

export const overpassSlice = createSlice({
    name: OVERPASS_REDUCER_NAME,
    initialState,
    reducers: {
        setBounds: (state, { payload }) => {
            state.bounds = payload.bounds;
        },
        fetchCities: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, { payload }) => {
            state.loading = false;
            state.error = null;
            state.data = payload;
        },
        fetchDataFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export const { setBounds, fetchCities,  fetchDataSuccess, fetchDataFailure } = overpassSlice.actions;

export const overpassReducer = overpassSlice.reducer;