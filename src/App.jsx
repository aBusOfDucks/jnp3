import React from 'react';
import Map from './map';
import DarkModeButton from './darkModeButton/darkModeButton'
import Filters from "./filters/index.jsx";
import Charts from "./charts/charts";
import {ThemeProvider} from "styled-components";
import { useSelector } from 'react-redux';
import { GlobalStyle } from './global-styles';
import { themeThemeSelector} from "./theme/selectors.jsx";
const App = () => {
    const theme = useSelector(themeThemeSelector)
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <DarkModeButton />
            <Filters />
            <Charts />
            <Map />
        </ThemeProvider>
    );
};

export default App;