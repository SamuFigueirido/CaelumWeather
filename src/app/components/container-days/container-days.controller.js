export default class ContainerDaysController {
    constructor($state, openWeatherMapsService, weatherContainerService) {
        this.$state = $state;
        this.openWeatherMapsService = openWeatherMapsService;
        this.weatherContainerService = weatherContainerService;
        this.listDays = [];
    }

    $onInit() {
        if (this.$state.params.city) {
            this.param = this.$state.params.city.toLowerCase();
        }
        this.openWeatherMapsService.getCurrentWeather(this.param)
        .then(response => {
            this.listDays = this.weatherContainerService.getListToShow(response);
        })
        .catch(response => {
            this.$state.go('errorInfo', {city: this.param});
            console.error('There is no weather for this city', response);
        });
        return this.listDays;
    }
}

ContainerDaysController.$inject = ['$state', 'openWeatherMapsService', 'weatherContainerService'];