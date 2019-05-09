export default class OpenWeatherMapService {
    constructor($http) {
        this.$http = $http;
    }
    getCurrentWeather(city) {
        const apiKey = '608c0e7fd9bce774dd414deb10de6e52';
        const request = {
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=' + apiKey,
            params: {
                units: 'metric',
                mode: 'json',
            }
        }
        return this.$http(request);
    }
}

OpenWeatherMapService.$inject = ['$http'];