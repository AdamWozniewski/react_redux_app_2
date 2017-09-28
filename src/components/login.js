import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Login extends Component {
    constructor(params) {
        super(params);
        this.entry = this.entry.bind(this);
    }
    entry(e) {
        e.preventDefault();
        // this.refs.loginForm.reset();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <form ref="loginForm" action="" onSubmit={this.entry}>
                    <TextField
                        hintText="Login"
                    /><br />
                    <TextField
                        hintText="Hasło"
                    /><br />
                    <RaisedButton
                        backgroundColor="#a4c639"
                        icon={<ActionAndroid color={fullWhite} />}
                        style={{margin: 12}}
                        type="submit"

                    />
                </form>
                <Link to='/forgot_password'>Zapomnialem hasla</Link>
                <br/>
                <Link to='/sign_up'>Rejestracja</Link>
            </div>
        )
    }
}

export default Login;