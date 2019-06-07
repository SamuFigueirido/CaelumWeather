import reducers from './redux/reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers(reducers);

export default [($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducer);
}];