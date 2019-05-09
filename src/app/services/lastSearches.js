export default class LastSearchesService {
    constructor(lastSearches) {
        this.lastSearches = lastSearches;
    }

    saveCity(city) {
        if (city === undefined || city.trim() === '') {
            return;
        } else {
            const cityAux = (city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()).trim();
            if (this.lastSearches.includes(cityAux)) {
                return;
            }
            this.lastSearches.unshift(cityAux);
            this.lastSearches.pop();
            localStorage.setItem('lastSearches', JSON.stringify(this.lastSearches));
        }
    }

    getCities() {
        this.lastSearches = JSON.parse(localStorage.getItem('lastSearches')) || [];
        return this.lastSearches;
    }
}

LastSearchesService.$inject = ['lastSearches'];