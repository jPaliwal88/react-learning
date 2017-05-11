import React, { Component } from 'react';
//import Clock from "./Clock";
import Toggle from './Toggle';
import Calculator from './Calculator';

class App extends Component{
    render() {
        return (
            <div>
                <Calculator />

                <Toggle/>
            </div>
        );
    };
}

export default App;
