import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapWrapper from './mapWrapper';
import {ALLOW_SCROLL, INITIAL_ZOOM} from "./const";
import { useDispatch, useSelector } from 'react-redux';
import CenterMapButton from "./centerMapButton/index.jsx";
import {fetchUserLocation} from "./geolocation/reducer";
import {geolocationLatitudeSelector, geolocationLongitudeSelector} from "./geolocation/selectors.jsx";
import Overpass from "./overpass/index.jsx";

const Map = () => {
    const dispatch = useDispatch();
    const latitude = useSelector(geolocationLatitudeSelector);
    const longitude = useSelector(geolocationLongitudeSelector);

    useEffect(() => {
        dispatch(fetchUserLocation());
    }, [dispatch]);


    return (
        <MapWrapper>
            {latitude ? (
            <MapContainer
                center={[latitude, longitude]}
                zoom={INITIAL_ZOOM}
                style={{ height: '100vh', width: '90vw' }}
                scrollWheelZoom={ALLOW_SCROLL}
            >
                <CenterMapButton />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Overpass />
            </MapContainer>) :
                (
                    <h1>Waiting for geolocation...</h1>
                )}
        </MapWrapper>
    );
};


export default Map;