import React,{Component} from "react";


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function Loginbutton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function Logoutbutton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn:true});
    };

    handleLogoutClick = () => {
        this.setState({isLoggedIn:false});
    };

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if(isLoggedIn) {
            button = <Logoutbutton onClick={this.handleLogoutClick}/>;
        } else {
            button = <Loginbutton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    };
}

export default LoginControl;