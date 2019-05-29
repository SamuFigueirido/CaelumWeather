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
            this.lastSearchesService.saveCity(this.param, this.lastSearchesService.getCities());
        }
        this.$state.go('mainPage', {
            city: this.param
        });
        let cities = [];
        this.nearbyCitiesService.getNearbyCities(this.param)
            .then(response => {
                response.forEach(element => {
                    cities.push(element.name);
                });
            })
            .catch(response => {
                console.log('There are no nearby cities');
            });
        this.nearbyCities = cities;
        console.log('Cities: ', cities);
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService'];