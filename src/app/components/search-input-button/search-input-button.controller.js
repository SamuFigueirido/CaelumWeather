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
}

StarPageController.$inject = ['lastSearchesService', '$state'];