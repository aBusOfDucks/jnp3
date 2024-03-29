import { createSelector } from '@reduxjs/toolkit';
import {FILTER_REDUCER_NAME} from "./reducers.jsx";

const getFiltersReducerState = (state) => state[FILTER_REDUCER_NAME];


export const filtersNameFilter = createSelector(
    getFiltersReducerState,
    ({ name_filter }) => name_filter
);

export const filtersPopulationMinimumFilter = createSelector(
    getFiltersReducerState,
    ({ population_filter_minimum }) => population_filter_minimum
);

export const filtersPopulationMaximumFilter = createSelector(
    getFiltersReducerState,
    ({ population_filter_maximum }) => population_filter_maximum
);

export const filtersPopulationMinimumFilterTemp = createSelector(
    getFiltersReducerState,
    ({ population_filter_minimum_temp }) => population_filter_minimum_temp
);

export const filtersPopulationMaximumFilterTemp = createSelector(
    getFiltersReducerState,
    ({ population_filter_maximum_temp }) => population_filter_maximum_temp
);
