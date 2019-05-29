export default class NearbyCitiesService {
    constructor($http) {
        this.$http = $http;
    }

    getNearbyCities(city) {
        const apiKey = process.env.API_KEY;
        let request = {
            method: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
            params: {
                units: 'metric',
                mode: 'json'
            }
        };
        console.log('URL: ' + request.url);
        const self = this;
        return this.$http(request)
            .then(response => {
                let lat = response.data.coord.lat;
                let lon = response.data.coord.lon;
                return self.getGeoNames(lat, lon);
            })
            .catch(response => {
                console.log(response.data.message);
            });
    }

    getGeoNames(lat, lon) {
        const username = process.env.USER_NAME;
        let request = {
            method: 'GET',
            url: `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lon}&cities=cities10000&radius=10&maxRows=6&style=short&username=${username}`,
            params: {
                units: 'metric',
                mode: 'json'
            }
        };
        console.log('URL: ' + request.url);
        return this.$http(request)
        .then(response => {
            return response.data.geonames;
        })
        .catch(response => {
            return response.data;
        });
    }
}

NearbyCitiesService.$inject = ['$http'];