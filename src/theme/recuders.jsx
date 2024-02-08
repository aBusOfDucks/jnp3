import { createSlice } from '@reduxjs/toolkit';
import {theme_dark, theme_light} from "./index.jsx";

export const THEME_REDUCER_NAME = 'theme'

const initialState = {
    theme: theme_light,
    dark_mode: false
};

export const themeSlice = createSlice({
    name: THEME_REDUCER_NAME,
    initialState,
    reducers: {
        setThemeLight: (state) => {
            state.theme = theme_light;
            state.dark_mode = false
        },
        setThemeDark: (state) => {
            state.theme = theme_dark;
            state.dark_mode = true
        },
    },
});

export const { setThemeLight, setThemeDark } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;