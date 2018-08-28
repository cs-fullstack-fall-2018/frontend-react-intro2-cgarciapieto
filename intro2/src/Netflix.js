import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Netflix extends Component {
    render() {

        var returnThis = this.props.netflixMovies.map(eachItem => {

            return (
                <div className="Netflix">
                    <h3>{eachItem.name}</h3>
                    <h3>{eachItem.yearrealeased}</h3>
                    <h3>{eachItem.genre}</h3>
                </div>
            );

        });
        return (
            <p>{returnThis}</p>)
    }
}


export default Netflix;
