import React, { Component } from 'react';
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class Main extends Component {
    render() {
        console.log(this.props)
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
                {/*{React.cloneElement(this.props.children, this.props)}*/}
                {this.props.children}

            </div>

        );
    }
}

export default Main;
