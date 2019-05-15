export default class StarPageController {
    constructor(lastSearchesService, openWeatherMapsService, $state) {
        this.lastSearchesService = lastSearchesService;
        this.openWeatherMapsService = openWeatherMapsService;
        this.$state = $state;
    }

    searchCity(city) {
        if(this.lastSearchesService.saveCity(city)) {
            this.$state.go('mainPage');
        }
    }

    showCities() {
        return this.lastSearchesService.getCities();
    }
}

StarPageController.$inject = ['lastSearchesService', 'openWeatherMapsService', '$state'];