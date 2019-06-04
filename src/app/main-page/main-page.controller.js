export default class MainPageController {
    constructor($state, lastSearchesService, nearbyCitiesService, openWeatherMapsService, weatherContainerService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.openWeatherMapsService = openWeatherMapsService;
        this.weatherContainerService = weatherContainerService;
        this.nearbyCities = [];
        this.days = [];
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
        this.openWeatherMapsService.getCurrentWeather(this.param)
            .then(response => {
                this.days = this.weatherContainerService.getListToShow(response);
            })
            .catch(response => {
                console.log('There is no weather for this city');
            });
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService', 'openWeatherMapsService', 'weatherContainerService'];