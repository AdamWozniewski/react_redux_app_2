import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from "./login";
import DinnersView from "./dinnersView";
import Error404 from "./404";
import SignUp from "./signup";
import ForgottenPassword from "./forgottenPassword";
import MyProfile from './myProfile';

class Main extends Component {
    render() {
        return (
            <div className="App">
                <Link to='/'>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                </Link>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Switch>
                    <Route exact path="/" render={(props) => <Login {...this.props} />} />
                    <Route path="/sign_up" render={(props) => <SignUp {...this.props} />} />
                    <Route path="/forgot_password" render={(props) => <ForgottenPassword {...this.props} />} />
                    <Route path="/lobby" render={(props) => <DinnersView {...this.props} />}>
                        {/*<Route exact path='/lobby/profile' render={(props)=> <MyProfile {...this.props} />} />*/}
                    </Route>
                    <Route path="/*" component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default Main;