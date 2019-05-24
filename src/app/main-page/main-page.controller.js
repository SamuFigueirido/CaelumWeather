export default class MainPageController {
    constructor($state, lastSearchesService, nearbyCitiesService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
    }

    $onInit() {
        this.lastSearches = this.lastSearchesService.getCities();
        if (this.$state.params.city) {
            this.param = this.$state.params.city;
        }
        this.lastSearchesService.saveCity(this.param, this.lastSearchesService.getCities());
        this.$state.go('mainPage', {city: this.param});
        this.nearbyCitiesService.getNearbyCities(this.param)
            .then(function (response) {
                for (let i = 0; i > response.data.geonames.length; i++) {
                    nearbyCities.push(response.data.geonames[i].name);
                    console.log(response.data.geonames[i].name);
                }
            })
            .catch(function (response) {
                console.log('Error: '+response.data);
            });
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService'];