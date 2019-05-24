export default class Controller {
    constructor($state, lastSearchesService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
    }

    searchCity ($state) {
        let param = $state.params.city;
        if (this.lastSearchesService.saveCity(param, this.lastSearchesService.getCities())) {
            this.$state.go('mainPage');
        }
    }

    showCities() {
        return this.lastSearchesService.getCities();
    }
}

Controller.$inject = ['$state', 'lastSearchesService']; 