import { createSelector } from '@reduxjs/toolkit';
import { GEOLOCATION_REDUCER_NAME } from './reducer';

const getGeolocationReducerState = (state) => state[GEOLOCATION_REDUCER_NAME];


export const geolocationLoadingSelector = createSelector(
    getGeolocationReducerState,
    ({ loading }) => loading
)

export const geolocationLatitudeSelector = createSelector(
    getGeolocationReducerState,
    ({ latitude }) => latitude
);

export const geolocationLongitudeSelector = createSelector(
    getGeolocationReducerState,
    ({ longitude }) => longitude
);

export const geolocationErrorSelector = createSelector(
    getGeolocationReducerState,
    ({ error }) => error
);
