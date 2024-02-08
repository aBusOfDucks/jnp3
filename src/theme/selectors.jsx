import { createSelector } from '@reduxjs/toolkit';
import {THEME_REDUCER_NAME} from "./recuders.jsx";

const getThemeReducerState = (state) => state[THEME_REDUCER_NAME];


export const themeThemeSelector = createSelector(
    getThemeReducerState,
    ({ theme }) => theme
)

export const themeDarkModeSelector = createSelector(
    getThemeReducerState,
    ({ dark_mode }) => dark_mode
)