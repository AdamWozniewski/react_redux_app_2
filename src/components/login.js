import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';

import { Link } from 'react-router-dom';
import {reduxForm, Field} from "redux-form";

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) =>
<TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
/>

class Login extends Component {
    constructor(params) {
        super(params);
        this.entry = this.entry.bind(this);
    }

    entry(params) {
        const findingPerson = this.props.persons.find(person => {
            if(person.login === params.login && person.psswd === params.psswd) {
                return true
            } else {
                return false
            }
        });
        if (findingPerson) {
            this.props.login("jaś", "machon");
            this.props.history.push('/lobby');
        } else {
            return false;
        }
        console.log()
    }

    render() {
        return (
            <div>
                <form ref="loginForm" action="" onSubmit={this.props.handleSubmit(this.entry)}>
                    <Field
                        name="login"
                        component={renderTextField}
                        label="Login"
                    /><br />
                    <Field
                        name="psswd"
                        component={renderTextField}
                        label="Hasło"
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

                <h3>Dostępni ludzie:</h3>
                <ul>
                    {this.props.persons.map(person=><li key={person.name}>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}

// export default Login;
export default reduxForm({
    form: 'login'
})(Login)