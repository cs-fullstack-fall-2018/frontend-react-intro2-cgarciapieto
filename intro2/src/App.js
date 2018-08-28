import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Netflix from './Netflix'

class App extends Component {
    render() {
        var netflixMovies = [{name: "Lord of the Rings", yearrealeased: 2001, genre: "Fantasy" },
        {name: "Doctor Strange", yearrealeased: 2017, genre: "Sci-Fi" },
            {name: "The Godfather", yearrealeased: 1972, genre: "Classic" }];
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Netflix netflixMovies = {netflixMovies}/>
            </div>



        );
    }
}

export default App;
