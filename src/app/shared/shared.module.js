import angular from 'angular';

//Services
import lastSearchesService from '../services/lastSearches.service';
import openWeatherMapsService from '../services/openWeatherMaps.service';
import nearbyCitiesService from '../services/nearbyCities.service';

//Values
import lastSearches from '../values/lastSearches';
import currentWeather from '../values/currentWeather';

//Components
import logoLetters from '../components/logo-letters/logo-letters.component';
import inputButton from '../components/search-input-button/search-input-button.component';
import listCities from '../components/list-cities/list-cities.component';
import weatherDay from '../components/weather-day/weather-day.component';

export default angular
    .module('appShared', [])
    .factory('lastSearchesService', lastSearchesService)
    .factory('openWeatherMapsService', openWeatherMapsService)
    .factory('nearbyCitiesService', nearbyCitiesService)
    .value('lastSearches', lastSearches)
    .value('currentWeather', currentWeather)
    .component('logoLetters', logoLetters)
    .component('inputButton', inputButton)
    .component('listCities', listCities)
    .component('weatherDay', weatherDay)
    .name;