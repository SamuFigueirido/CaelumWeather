import { SAVE_CITY } from './constants';

export function saveCity(city) {
    return {
        type: SAVE_CITY,
        city
    }
}