import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class SignUp extends Component {
    entry(e) {
        e.preventDefault();
        console.log("logowanie");
        // this.refs.loginForm.reset();
    }
    render() {
        return (
            <div>
                <form ref="loginForm" action="" onSubmit={this.entry}>
                    <TextField
                        hintText="Login"
                    /><br />
                    <TextField
                        hintText="Imie i nazwisko"
                    /><br />
                    <TextField
                        hintText="Hasło"
                    /><br />
                    <TextField
                        hintText="Potwierdź hasło"
                    /><br />
                    <RaisedButton
                        backgroundColor="#a4c639"
                        icon={<ActionAndroid color={fullWhite} />}
                        style={{margin: 12}}
                        type="submit"
                    />
                </form>
                <Link to='/'>Wróc do logowania</Link>
            </div>
        )
    }
}

export default SignUp;