import angular from 'angular';
import appComponent from './app.component';
// angular.module('app', []).component('app', appComponent);

const myApp = angular.module('app', []);
myApp.controller('weatherCtrl', function ($scope, $http) {
    const scope = $scope;
    $http.get("http://ip-api.com/json").then(function(response) {
        scope.lat = response.data.lat;
        scope.lon = response.data.lon;
        const apiKey = "608c0e7fd9bce774dd414deb10de6e52";
        const openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + scope.lat + "&lon=" + scope.lon + "&appid=" + apiKey;
        $http.get(openWeatherURL).then(function(response) {
            const info = {
                city: response.data.name,
                tempMin: (response.data.main.temp_min - 273).toPrecision(4),
                tempMax: (response.data.main.temp_max - 273).toPrecision(4),
                description: response.data.weather[0].description
            }
            console.log(info);
            console.log("City: " + info.city);
            console.log("Minimun temperature: " + info.tempMin + "°C");
            console.log("Maximun temperature: " + info.tempMax + "°C");
            console.log("Weather: " + info.description);
        });
    });
});