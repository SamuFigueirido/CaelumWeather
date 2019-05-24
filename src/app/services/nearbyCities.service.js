export default class NearbyCitiesService {
    constructor($http) {
        this.$http = $http;
        console.log(process.env.API_KEY);
    }

    getNearbyCities(city) {
        let lat;
        let lon;
        const apiKey = process.env.API_KEY;
        let request = {
            method: 'GET',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
            params: {
                units: 'metric',
                mode: 'json',
            }
        }
        console.log(lat +"----"+ lon)
        this.$http(request)
            .then(function (response) {
                lat = response.data.coord.lat;
                lon = response.data.coord.lon;
            })
            .catch(function (response) {
                console.log(response.data);
            });
        const username = process.env.USERNAME;
        request = {
            method: 'GET',
            url: `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lon}&cities=cities10000&radius=10&maxRows=5&style=short&username=${username}`,
            params: {
                units: 'metric',
                mode: 'json',
            }
        }
        return this.$http(request);
    }
}

NearbyCitiesService.$inject = ['$http'];