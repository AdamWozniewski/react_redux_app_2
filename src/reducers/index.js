import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducery - tu są pobierane funkcje do obsługi zdarzen, ktore potem są dostępne dla komponentow
import dinners from './dinner';
import persons from './person';

const rootReducer = combineReducers({dinners, persons, routing: routerReducer});
window.devToolsExtension ? window.devToolsExtension() : f => f


export default rootReducer;