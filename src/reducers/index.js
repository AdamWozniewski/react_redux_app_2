import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// reducery - tu są pobierane funkcje do obsługi zdarzen, ktore potem są dostępne dla komponentow
import dinners from './dinner';
import person from './person';
import snacks from './snacks';

const rootReducer = combineReducers({dinners, person, snacks, routing: routerReducer, form: formReducer});
window.devToolsExtension ? window.devToolsExtension() : f => f


export default rootReducer;