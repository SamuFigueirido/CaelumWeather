export default class SearchInputButtonController {
    constructor(lastSearchesService, $state) {
        this.lastSearchesService = lastSearchesService;
        this.$state = $state;
    }

    searchCity(city) {
        const action = this.lastSearchesService.saveCity(city, this.lastSearchesService.getCities());
        if (action) {
            this.$state.go('mainPage', {city: city});
        }
    }
}

SearchInputButtonController.$inject = ['lastSearchesService', '$state'];