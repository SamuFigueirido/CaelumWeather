import template from './list-cities.html';
import './list-cities.scss';
import controller from '../../shared/shared.controller';

const AppComponent = {
    template,
    controller,
    bindings: {
        recentSearches: '<',
        nearCities: '<'
    }
};

export default AppComponent;