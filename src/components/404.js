import React, { Component } from 'react';

// Do pozniejszego ostylowania
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Error404 extends Component {
    render() {
        return (
            <div>
               <h1>404</h1>
                <Link to='/'>Wróc do logowania</Link>
            </div>
        )
    }
}

export default Error404;