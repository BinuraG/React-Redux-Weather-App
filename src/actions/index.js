import axios from 'axios';

const API_KEY = '09fa023d0e64cee894dedf4dd7d65c13';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// This is an ActionCreator
export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},lk`;
    const request = axios.get(url);
    console.log('action request: ', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}