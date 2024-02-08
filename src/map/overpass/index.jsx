import React, {useEffect} from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useMap, useMapEvents } from 'react-leaflet';
import {overpassDataSelector} from "./selectors.jsx";
import { useDispatch, useSelector } from 'react-redux';
import {fetchCities, setBounds} from "./reducer.jsx";
import {getBounds, getIcon, getRainEmoji, getScoreEmoji, getWarmthEmoji, getWeatherScore} from "./utils.jsx";
import 'leaflet/dist/leaflet.css';
import {themeThemeSelector} from "../../theme/selectors.jsx";
const Overpass = () => {
    const data = useSelector(overpassDataSelector);
    const theme = useSelector(themeThemeSelector)
    const dispatch = useDispatch();
    const map = useMap();
    const bounds = getBounds(map);

    useEffect(() => {
        dispatch(setBounds({ bounds }));
        dispatch(fetchCities());
    }, [dispatch]);

    const mapEvent = useMapEvents({
        moveend: () => {
            dispatch(setBounds({bounds: getBounds(mapEvent),}));
            dispatch(fetchCities())}
    });

    return (
        <div>
            {data.map((record) => (
                <Marker icon={getIcon(record.weather, theme)} key={record.city.id} position={[record.city.lat, record.city.lon]}>
                    <Popup>
                        {record.city.tags.name}<br/>
                        Population: {record.city.tags.population}<br/>
                        Temperature: {record.weather.current.temp_c} {getWarmthEmoji(record.weather.current.temp_c)}<br/>
                        Precipitation: {record.weather.current.precip_mm} {getRainEmoji(record.weather.current.precip_mm)}<br/>
                        Weather: {getWeatherScore(record.weather)} {getScoreEmoji(record.weather)}
                    </Popup>
                </Marker>
            ))}
        </div>
    );
};

export default Overpass;