import template from './container-days.component.html';
import './container-days.component.scss';

const AppComponent = {
    template,
    bindings: {
        listDays: '<',
    }
};

export default AppComponent;