import {
    SAVE_CITY
} from './constants';

const initialState = {
    lastSearches: JSON.parse(localStorage.getItem('lastSearches')) || []
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case SAVE_CITY:
            saveCity(action, state);
    }
    return state;
}

const saveCity = (action, state) => {
    const city = action.city;
    const cities = state.lastSearches;
    if (city === undefined || city.trim() === '') {
        return;
    }
    const cityAux = city.trim().toLowerCase();
    if (cities.includes(cityAux)) {
        return true;
    }
    cities.unshift(city);
    if (cities.length > 10) {
        cities.pop();
    }
    localStorage.setItem('lastSearches', JSON.stringify(cities));
    return true;
}