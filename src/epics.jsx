import { combineEpics } from 'redux-observable';
import {geolocationEpic} from "./map/geolocation/epics";
import {overpassEpic} from "./map/overpass/epics.jsx";

export const rootEpic = combineEpics(
    geolocationEpic,
    overpassEpic,
);
