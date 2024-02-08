import React from 'react';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import {geolocationLatitudeSelector, geolocationLongitudeSelector} from "../geolocation/selectors.jsx";

const CenterMapButton = () => {
    const map = useMap();
    const latitude = useSelector(geolocationLatitudeSelector);
    const longitude = useSelector(geolocationLongitudeSelector);

    const centerMap = () => {
        map.setView([latitude, longitude]);
    };

    return (
        <button
            onClick={centerMap}
            style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                zIndex: 1000,
                padding: '10px',
            }}
        >
            Center Map
        </button>
    );
};

export default CenterMapButton;