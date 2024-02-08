import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic} from "./epics";
import {GEOLOCATION_REDUCER_NAME, geolocationReducer} from "./map/geolocation/reducer";
import {OVERPASS_REDUCER_NAME, overpassReducer} from "./map/overpass/reducer.jsx";
import {THEME_REDUCER_NAME, themeReducer} from "./theme/recuders.jsx";
import {FILTER_REDUCER_NAME, filterReducer} from "./filters/reducers.jsx";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        [GEOLOCATION_REDUCER_NAME]: geolocationReducer,
        [OVERPASS_REDUCER_NAME]: overpassReducer,
        [FILTER_REDUCER_NAME]: filterReducer,
        [THEME_REDUCER_NAME]: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
});

epicMiddleware.run(rootEpic);
