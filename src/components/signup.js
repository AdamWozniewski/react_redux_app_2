import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';

import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

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

class SignUp extends Component {

    constructor(params) {
        super(params);
        this.newUser = this.newUser.bind(this);
        this.state = {
            open: false,
        };
    }

    newUser(params) {
        this.setState({
            open: true,
        });
        setTimeout(()=>{
            this.props.history.push('/');
        }, 2000);
        this.props.createNewCustomer(params); // wywolanie akcji z actionCreator
    }

    render() {
        return (
            <div>
                <FontIcon className="material-icons" >flight_takeoff</FontIcon>
                <form onSubmit={this.props.handleSubmit(this.newUser)}>
                    <Field name="login"
                           component={renderTextField}
                           label="Login"
                    /><br/>
                    <Field name="name"
                           component={renderTextField}
                           label="Imię i Nazwisko"
                    /><br/>
                    <Field name="psswd"
                           component={renderTextField}
                           label="Hasło"
                    /><br/>
                    <Field name="confirmPsswd"
                           component={renderTextField}
                           label="Potwierdź hasło"
                    /><br/>
                    <RaisedButton
                        backgroundColor="#a4c639"
                        icon={<ActionAndroid color={fullWhite} />}
                        style={{margin: 12}}
                        type="submit"
                    />
                </form>
                <Link to='/'>Wróc do logowania</Link>
                <Snackbar
                    open={ this.state.open }
                    message="Dzięki za rejestrację !"
                    autoHideDuration={1000}
                />
            </div>
        )
    }
}

// export default SignUp;
export default reduxForm({
    form: 'signUp'
})(SignUp)