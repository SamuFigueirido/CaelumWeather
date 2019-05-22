import angular from 'angular';

//Services
import lastSearchesService from '../services/lastSearches';
import openWeatherMapsService from '../services/openWeatherMaps';
import nearbyCitiesService from '../services/nearbyCities';

//Values
import lastSearches from '../values/lastSearches';
import currentWeather from '../values/currentWeather';

//Components
import logoLetters from '../components/logo-letters/logo-letters';
import inputButton from '../components/search-input-button/search-input-button';
import listCities from '../components/list-cities/list-cities';

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
    .name;