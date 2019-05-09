export default class LastSearchesService {
    constructor(lastSearches) {
        this.lastSearches = lastSearches;
    }

    saveCity(city) {
        if (city === undefined || city.trim() === '') {
            return;
        } else {
            const cityAux = city.trim().toLowerCase();
            if (this.lastSearches.includes(cityAux)) {
                return;
            }
            this.lastSearches.unshift(cityAux);
            if(this.lastSearches.length === 11) {
                this.lastSearches.pop();
            }
            localStorage.setItem('lastSearches', JSON.stringify(this.lastSearches));
        }
    }

    getCities() {
        this.lastSearches = JSON.parse(localStorage.getItem('lastSearches')) || [];
        return this.lastSearches;
    }
}

LastSearchesService.$inject = ['lastSearches'];