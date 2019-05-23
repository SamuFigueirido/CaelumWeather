export default class Controller {
    constructor(lastSearchesService, $state) {
        this.lastSearchesService = lastSearchesService;
        this.$state = $state;
    }

    searchCity(city) {
        console.log(city);
        if (this.lastSearchesService.saveCity(city, this.lastSearchesService.getCities())) {
            this.$state.go('mainPage');
        }
    }

    showCities() {
        return this.lastSearchesService.getCities();
    }
}

Controller.$inject = ['lastSearchesService', '$state'];