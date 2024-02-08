import { createSlice } from '@reduxjs/toolkit';
import {MAX_POPULATION} from "./populationFilter/const.jsx";

export const FILTER_REDUCER_NAME = 'filters'

const initialState = {
    name_filter: "",
    population_filter_minimum: 0,
    population_filter_maximum: MAX_POPULATION
};

export const filterSlice = createSlice({
    name: FILTER_REDUCER_NAME,
    initialState,
    reducers: {
        setNameFilter: (state, { payload }) => {
            state.name_filter = payload;
        },
        setPopulationFilterMinimum: (state, { payload }) => {
            state.population_filter_minimum = payload;
        },
        setPopulationFilterMaximum: (state, { payload }) => {
            state.population_filter_maximum = payload;
        },
    },
});

export const { setNameFilter, setPopulationFilterMinimum, setPopulationFilterMaximum } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;