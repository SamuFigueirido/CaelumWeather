export default class NearbyCitiesService {
    constructor($http) {
        this.$http = $http;
    }

    getNearbyCities(city) {
        const apiKey = process.env.API_KEY;
        const request = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
            params: {
                units: 'metric',
                mode: 'json'
            }
        };
        const self = this;
        return this.$http(request)
            .then(response => {
                const { lat, lon } = response.data.coord;
                return self.getGeoNames(lat, lon);
            });
    }

    getGeoNames(lat, lon) {
        const username = process.env.USER_NAME;
        const request = {
            method: 'GET',
            url: `https://secure.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lon}&cities=cities10000&radius=10&maxRows=6&style=short&username=${username}`,
            params: {
                units: 'metric',
                mode: 'json'
            }
        };
        return this.$http(request)
        .then(response => response.data.geonames);
    }
}

NearbyCitiesService.$inject = ['$http'];