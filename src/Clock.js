import React, {Component} from 'react';

class Clock extends Component{

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentDidMount() {
        console.log('Clock mounted');
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    shouldComponentUpdate(newProps, newState) {
        console.log(newState.date.getSeconds());
        if(newState.date.getSeconds()%5 === 0)
        {
            return true;
        }
        return false;
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('unmount Clock');
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    };
}

export default Clock;