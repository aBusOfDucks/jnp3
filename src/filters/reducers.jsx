import { createSlice } from '@reduxjs/toolkit';
import {MAX_POPULATION} from "./populationFilter/const.jsx";

export const FILTER_REDUCER_NAME = 'filters'

const initialState = {
    name_filter: "",
    name_filter_temp: "",
    population_filter_minimum: 0,
    population_filter_maximum: MAX_POPULATION,
    population_filter_minimum_temp: 0,
    population_filter_maximum_temp: MAX_POPULATION
};

export const filterSlice = createSlice({
    name: FILTER_REDUCER_NAME,
    initialState,
    reducers: {
        setNameFilterTemp: (state, { payload }) => {
            state.name_filter_temp = payload;
        },
        setNameFilter: (state) => {
            state.name_filter = state.name_filter_temp;
        },
        setPopulationFilterMinimumTemp: (state, { payload }) => {
            state.population_filter_minimum_temp = payload;
        },
        setPopulationFilterMaximumTemp: (state, { payload }) => {
            state.population_filter_maximum_temp = payload;
        },
        setPopulationFilterMinimum: (state) => {
            state.population_filter_minimum = state.population_filter_minimum_temp;
        },
        setPopulationFilterMaximum: (state) => {
            state.population_filter_maximum = state.population_filter_maximum_temp;
        },
    },
});

export const { setNameFilterTemp, setPopulationFilterMaximumTemp, setPopulationFilterMinimumTemp, setNameFilter, setPopulationFilterMinimum, setPopulationFilterMaximum } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;