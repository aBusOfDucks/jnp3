import {
    COLD_WEATHER_EMOJI,
    HOT_WEATHER_EMOJI,
    NICE_WEATHER_EMOJI, NO_RAIN_WEATHER_EMOJI,
    NOT_NICE_WEATHER_EMOJI, PASSABLE_WEATHER_EMOJI, RAIN_WEATHER_EMOJI, WARM_WEATHER_EMOJI,
} from "./emojis.jsx";
import L from 'leaflet'
import {MAX_NICE_WARMTH, MIN_NICE_WARMTH, PRECIPITATION_TOLERANCE} from "../const.jsx";


export const fetchCitiesData = async (bounds) => {
    const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["place"="city"](${bounds});out;&node(id);out tags;`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch cities');
        }
        const data = await response.json();
        return data.elements;
    } catch (error) {
        console.error('Error fetching cities:', error);
        return [];
    }
};

export const getBounds = (map) => {
    const temp = map.getBounds().toBBoxString().split(",");
    return temp[1] + ", " + temp[0] + ", " + temp[3] + ", " + temp[2];
};

export const fetchWeatherData = async (cities) => {
    const apikey = import.meta.env.VITE_WEATHER_API_KEY;
    const requests = cities.map(async (city) => {
        const q = city.lat + "," + city.lon;
        const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${q}`
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => alert(error));
    });
    const resultes = await Promise.all(requests);
    return resultes;
};

const getRainScore = (precip_mm) => {
    if (precip_mm <= PRECIPITATION_TOLERANCE){
        return 1;
    }
    else {
        return 0;
    }
}

const getWarmthScore = (temp_c) => {
    if (temp_c <= MAX_NICE_WARMTH && temp_c >= MIN_NICE_WARMTH){
        return 1;
    }
    else {
        return 0;
    }
}

export const getRainEmoji = (precip_mm) => {
    switch (getRainScore(precip_mm)) {
        case 1:
            return NO_RAIN_WEATHER_EMOJI;
        default:
            return RAIN_WEATHER_EMOJI;
    }
}

export const getWarmthEmoji = (temp_c) => {
    if (temp_c > MAX_NICE_WARMTH)
        return HOT_WEATHER_EMOJI;
    if (temp_c <= MAX_NICE_WARMTH && temp_c >= MIN_NICE_WARMTH)
        return WARM_WEATHER_EMOJI;
    if (temp_c < MIN_NICE_WARMTH)
        return COLD_WEATHER_EMOJI;
}

export const getWeatherScore = (weather) => {
    const score = getRainScore(weather.current.precip_mm) + getWarmthScore(weather.current.temp_c);
    switch (score){
        case 2:
            return 'Nice';
        case 1:
            return 'Passable';
        default:
            return 'Not nice';
    }
}


export const getScoreEmoji = (weather) => {
    switch (getWeatherScore(weather)) {
        case 'Nice':
            return NICE_WEATHER_EMOJI;
        case 'Passable':
            return PASSABLE_WEATHER_EMOJI;
        default:
            return NOT_NICE_WEATHER_EMOJI;
    }
}

export const getIcon = (weather, theme) => {
    const score_emoji = getScoreEmoji(weather);
    return L.divIcon({
        className: 'emoji-icon',
        html: score_emoji.fontsize(theme.fonts.emojiFontSize),
    });
}