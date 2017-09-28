// Import React plugins
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Css
import './index.css';
import './App.css';

//Components

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';
import Login from './components/login';
import ForgottenPassword from './components/forgottenPassword';
import SignUp from './components/signup';
import Error404 from './components/404';
import MyProfile from './components/myProfile';
import DinnersView from './components/dinnersView';
import registerServiceWorker from './registerServiceWorker';

import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router>
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
