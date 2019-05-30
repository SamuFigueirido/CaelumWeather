import template from './list-cities.component.html';
import './list-cities.component.scss';

const AppComponent = {
    template,
    bindings: {
        listCities: '<',
    }
};

export default AppComponent;