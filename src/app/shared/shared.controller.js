export default class Controller {
    constructor(lastSearchesService, nearbyCitiesService, $state) {
        this.lastSearchesService = lastSearchesService;
        this.nearbyCitiesService = nearbyCitiesService;
        this.$state = $state;
        this.cities = [];
    }

    searchCity(city) {
        console.log(city);
        if (this.lastSearchesService.saveCity(city, this.lastSearchesService.getCities())) {
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

Controller.$inject = ['lastSearchesService', 'nearbyCitiesService', '$state'];