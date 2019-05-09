export default class StarPageController {
    constructor(lastSearchesService) {
        this.lastSearchesService = lastSearchesService;
    }

    searchCity() {
        this.lastSearchesService.saveCity(this.city);
    }

    showCities() {
        return this.lastSearchesService.getCities();
    }
}

StarPageController.$inject = ['lastSearchesService'];