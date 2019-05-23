export default class Controller {
    constructor($state, lastSearchesService, nearbyCitiesService) {
        this.$state = $state;
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.cities = [];
    }

    searchCity ($state) {
        let param = $state.params.city;
        if (this.lastSearchesService.saveCity(param, this.lastSearchesService.getCities())) {
            this.$state.go('mainPage');
        }
    }

    showCities() {
        return this.lastSearchesService.getCities();
    }

    showNearbyCities(city) {
        this.nearbyCitiesService.getNearbyCities(city)
            .then(function (response) {
                for (let i = 0; i > response.data.geonames.length; i++) {
                    cities.push(response.data.geonames[i].name);
                    console.log(response.data.geonames[i].name);
                }
            })
            .catch(function (response) {
                console.log(response.data);
            });
        return cities;
    }
}

Controller.$inject = ['$state', 'lastSearchesService', 'nearbyCitiesService']; 