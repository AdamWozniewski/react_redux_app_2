import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { Link } from 'react-router-dom';

class MyProfile extends Component {
    render() {
        return (
            <div>
                <h1>PROFIL</h1>
                <Link to='/lobby'>Wróc do logowania</Link>
            </div>
        )
    }
}

export default MyProfile;