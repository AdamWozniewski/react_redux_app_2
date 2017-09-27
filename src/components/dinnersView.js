import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import dinner from '../data/dinners';

class DinnersView extends Component {
    constructor(param) {
        super(param);
        this.data = new Date();
        this.dayOfWeek = ["Poniedziałek", "Wtorek", "Sroda", "Czwartek", "Piątek", "Sobota", "Niedziela"];
        this.monthOfYear = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
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
                    {dinner.map((tile) => (
                        <GridTile
                            key={tile.name}
                            title={tile.name}
                            subtitle={<span><b>{tile.soup}</b></span>}
                        >
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

export default DinnersView;