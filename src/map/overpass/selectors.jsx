import { createSelector } from '@reduxjs/toolkit';
import { OVERPASS_REDUCER_NAME } from './reducer';

const getOverpassReducerState = (state) => state[OVERPASS_REDUCER_NAME];


export const overpassDataSelector = createSelector(
    getOverpassReducerState,
    ({ data }) => data
);
