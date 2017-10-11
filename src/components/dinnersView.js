import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import date from '../static/date';

class DinnersView extends Component {
    constructor(param) {
        super(param);
        this.data = new Date();
        this.dayOfWeek = date.dayOfWeek;
        this.monthOfYear = date.monthOfYear;
    }

    render() {
        return (
            <div >
                <h3>
                    {`Dziś jest : ${this.dayOfWeek[this.data.getDay()- 1]}
                    ${this.data.getDate()}
                    ${this.monthOfYear[this.data.getMonth()]}`}
                </h3>
                <GridList
                    cellHeight={180}
                >
                    <Subheader>Menu</Subheader>
                    {this.props.dinner.map((tile) => (
                        <GridTile
                            key={tile.name}
                            title={tile.name}
                            subtitle={<span><b>{tile.soup}</b></span>}
                        >

                        </GridTile>
                    ))}
                </GridList>
                {/*{React.cloneElement(this.props.children, this.props)}*/}
                {this.props.children}
                <Link to='/'>Wyloguj</Link>
            </div>
        )
    }
}

export default DinnersView;