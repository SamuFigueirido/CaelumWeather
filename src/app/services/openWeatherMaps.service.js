export default class OpenWeatherMapsService {
    constructor($http) {
        this.$http = $http;
        this.apiKey = process.env.API_KEY;
    }

    getCurrentWeather(city) {
        const request = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`,
            params: {
                units: 'metric',
                mode: 'json',
            }
        }
        const self = this;
        return this.$http(request)
            .then(response => {
                const { lat, lon} = response.data.coord;
                return self.getWeatherFiveDays(lat, lon);
            })
            .catch(response => console.error(response.data.message));
    }

    getWeatherFiveDays(lat, lon) {
        const request = {
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`,
            params: {
                units: 'metric',
                mode: 'json',
            }
        }
        return this.$http(request)
        .then(response => response.data)
        .catch(response => console.error(response.data));
    }
}

OpenWeatherMapsService.$inject = ['$http'];