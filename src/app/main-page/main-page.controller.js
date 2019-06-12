import {
    saveCity
} from '../redux/actions';
export default class MainPageController {
    constructor($state, nearbyCitiesService, openWeatherMapsService, weatherContainerService, $mdDialog, $mdToast, $ngRedux) {
        this.$state = $state;
        this.nearbyCitiesService = nearbyCitiesService;
        this.openWeatherMapsService = openWeatherMapsService;
        this.weatherContainerService = weatherContainerService;
        this.nearbyCities = [];
        this.days = [];
        this.nameDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;
        this.$ngRedux = $ngRedux;
        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
    }

    $onInit() {
        if (this.$state.params.city) {
            this.param = this.$state.params.city;
            this.$ngRedux.dispatch(saveCity(this.param));
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
                console.error('There is no weather for this city', response);
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

    mapStateToThis(state) {
        return {
            lastSearches: state.default.lastSearches
        };
    }

    $onDestroy() {
        this.unsubscribe();
    }
}

MainPageController.$inject = ['$state', 'nearbyCitiesService', 'openWeatherMapsService', 'weatherContainerService', '$mdDialog', '$mdToast', '$ngRedux'];