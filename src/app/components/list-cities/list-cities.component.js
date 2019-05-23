import template from './list-cities.component.html';
import './list-cities.component.scss';
import controller from './list-cities.controller';

const AppComponent = {
    controller,
    template,
    bindings: {
        listCities: '<',
    }
};

export default AppComponent;