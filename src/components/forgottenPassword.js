import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';

import Snackbar from 'material-ui/Snackbar';
import { Field, reduxForm } from 'redux-form';

import { Link } from 'react-router-dom';

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

class ForgottenPassword extends Component {
    constructor(params) {
        super(params);
        this.state = {
            open: false
        }
        this.sendPasswordReminder = this.sendPasswordReminder.bind(this);
    }
    sendPasswordReminder(params) {
        this.props.forgottenPassword(params);
        this.setState({
            open: true,
        });
        setTimeout(()=>{
            this.props.history.push('/');
        }, 2000);
    }
    render() {
        return (
            <div>
                <form ref="loginForm" action="" onSubmit={this.props.handleSubmit(this.sendPasswordReminder)}>
                    <Field name="email"
                           component={renderTextField}
                           label="Wprowadź swój email"
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
                    message="Przypomnienie hasła wysłane na maila"
                    autoHideDuration={1000}
                />
            </div>
        )
    }
}

// export default ForgottenPassword;
export default reduxForm({
    form: 'forgottenPassword'
})(ForgottenPassword)