export default class StarPageController {
    constructor(lastSearchesService, $state) {
        this.lastSearchesService = lastSearchesService;
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

StarPageController.$inject = ['lastSearchesService', '$state'];