export default class StartPageController {
    constructor(lastSearchesService) {
        this.lastSearchesService = lastSearchesService;
    }

    $onInit() {
        this.lastSearches = this.lastSearchesService.getCities();
    }
}

StartPageController.$inject = ['lastSearchesService']; 