export default class LastSearchesService {
    constructor(lastSearches) {
        this.lastSearches = lastSearches;
    }

    saveCity(city, cities) {
        if (city === undefined || city.trim() === '') {
            return;
        }
        const cityAux = city.trim().toLowerCase();
        if (cities.includes(cityAux)) {
            return true;
        }
        cities.unshift(cityAux);
        if (cities.length > 10) {
            cities.pop();
        }
        localStorage.setItem('lastSearches', JSON.stringify(cities));
        return true;
    }

    getCities() {
        this.lastSearches = JSON.parse(localStorage.getItem('lastSearches')) || [];
        return this.lastSearches;
    }
}

LastSearchesService.$inject = ['lastSearches'];