export default ['$http', function ($http) {
    const lat = 42.2328;
    const lon = -8.7226;
    const apiKey = "608c0e7fd9bce774dd414deb10de6e52";
    const openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    const request = {
        method: 'GET',
        url: openWeatherURL,
        params: {
            units: 'metric',
            mode: 'json'
        }
    };
    return $http(request);
}];