export default class MainPageController {
    constructor($state, lastSearchesService, nearbyCitiesService, openWeatherMapsService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.openWeatherMapsService = openWeatherMapsService;
        this.nearbyCities = [];
        this.weatherDays = ['DAY 1', 'DAY 2', 'DAY 3', 'DAY 4', 'DAY 5'];
    }

    $onInit() {
        this.lastSearches = this.lastSearchesService.getCities();
        if (this.$state.params.city) {
            this.param = this.$state.params.city;
        }
        this.lastSearchesService.saveCity(this.param, this.lastSearchesService.getCities());
        this.$state.go('mainPage', {
            city: this.param
        });
        let cities = [];
        this.nearbyCitiesService.getNearbyCities(this.param)
            .then(function (response) {
                response.forEach(element => {
                    cities.push(element.name);
                });
            })
            .catch(function (response) {
                console.log('There are no nearby cities');
            });
        this.nearbyCities = cities;
        console.log('Cities: ', cities);

        this.openWeatherMapsService.getCurrentWeather(this.param)
        .then(response => {
            response.forEach(element => {
                // this.weatherDays.push(element.dt);
            });
        })
        .catch(response => {
            console.log('There is no weather for this city');
        });
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService', 'openWeatherMapsService'];