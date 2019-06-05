export default class MainPageController {
    constructor($state, lastSearchesService, nearbyCitiesService, openWeatherMapsService, weatherContainerService, $mdDialog, $mdToast) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.openWeatherMapsService = openWeatherMapsService;
        this.weatherContainerService = weatherContainerService;
        this.nearbyCities = [];
        this.days = [];
        this.nameDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;
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

    openContentDialog() {
        this.$mdDialog.show({
                template: '<contact-dialog></contact-dialog>',
                clickOutsideToClose: true,
                escapeToClose: true
            })
            .then((response) => {
                console.log(response);
                this.$mdToast.show(
                    this.$mdToast.simple()
                    .textContent('Message sent successfully!')
                    .hideDelay(3500)
                    .position('top right')
                );
            })
    }
}

MainPageController.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService', 'openWeatherMapsService', 'weatherContainerService', '$mdDialog', '$mdToast'];