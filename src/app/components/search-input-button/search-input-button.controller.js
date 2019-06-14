export default class SearchInputButtonController {
    constructor(lastSearchesService, $state) {
        this.lastSearchesService = lastSearchesService;
        this.$state = $state;
    }

    searchCity(city) {
        const action = this.lastSearchesService.saveCity(city, this.lastSearchesService.getCities());
        if (action) {
            this.$state.go('searchCity', {city: city}, {reload: true});
        }
    }
}

SearchInputButtonController.$inject = ['lastSearchesService', '$state'];