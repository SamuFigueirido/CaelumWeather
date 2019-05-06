export default class WeatherComponent {
    constructor(weatherService) {
        this.weatherSearch = () => {
            weatherService
                .then(function (response) {
                    const info = {
                        city: response.data.name,
                        tempMin: response.data.main.temp_min.toPrecision(4),
                        tempMax: response.data.main.temp_max.toPrecision(4),
                        description: response.data.weather[0].description
                    }
                    console.log('City: ' + info.city);
                    console.log('Minimun temperature: ' + info.tempMin + '°C');
                    console.log('Maximun temperature: ' + info.tempMax + '°C');
                    console.log('Weather: ' + info.description);
                })
                .catch(function (response) {
                    console.log(response.data);
                });
        }
    }
};

WeatherComponent.$inject = ['weatherService'];