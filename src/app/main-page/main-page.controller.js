export default class MainPageController {
    constructor($state, lastSearchesService, nearbyCitiesService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.nearbyCities = [];
    }

    $onInit() {
        this.lastSearches = this.lastSearchesService.getCities();
        if (this.$state.params.city) {
            this.param = this.$state.params.city;
            this.lastSearchesService.saveCity(this.param);
        }
        this.nearbyCitiesService.getNearbyCities(this.param)
            .then(response => {
                response.forEach(element => {
                    this.nearbyCities.push(element.name);
                });
            })
            .catch(response => {
                console.log('There are no nearby cities');
            });
        console.log('Cities: ', this.nearbyCities);
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService'];