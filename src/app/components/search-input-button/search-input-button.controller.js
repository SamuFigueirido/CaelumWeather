export default class Controller {
    constructor(lastSearchesService, $state) {
        this.lastSearchesService = lastSearchesService;
        this.$state = $state;
    }

    searchCity(cityAux) {
        if (this.lastSearchesService.saveCity(cityAux, this.lastSearchesService.getCities())) {
            this.$state.go('mainPage', {city: cityAux});
        }
    }
}

Controller.$inject = ['lastSearchesService', '$state'];