import {DEFAULT_LATITUDE, DEFAULT_LONGITUDE} from "./const.jsx";
export const getUserLocation = () => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    resolve({
                        latitude: DEFAULT_LATITUDE,
                        longitude: DEFAULT_LONGITUDE,
                    });
                    reject(error);
                }
            );
        } else {
            resolve({
                latitude: DEFAULT_LATITUDE,
                longitude: DEFAULT_LONGITUDE,
            });
            reject(new Error('Geolocation not supported'));
        }
    });
};