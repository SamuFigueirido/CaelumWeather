export default class SearchInputButtonController {
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

SearchInputButtonController.$inject = ['lastSearchesService', '$state'];