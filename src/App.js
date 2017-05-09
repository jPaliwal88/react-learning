import React, { Component } from 'react';
import Clock from "./Clock";
import Toggle from './Toggle';

class App extends Component{
    render() {
        return (
            <div>
                <Clock/>
                <Toggle/>
            </div>
        );
    };
}

export default App;
