export default class StarPageController {
    constructor(lastSearchesService, openWeatherMapsService) {
        this.lastSearchesService = lastSearchesService;
        this.openWeatherMapsService = openWeatherMapsService;
    }

    searchCity() {
        this.lastSearchesService.saveCity(this.city);
    }

    showCities() {
        return this.lastSearchesService.getCities();
    }
}

StarPageController.$inject = ['lastSearchesService', 'openWeatherMapsService'];