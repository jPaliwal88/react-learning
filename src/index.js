import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}



function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function formatDate(date) {
    return date.toLocaleDateString();
}


function App() {
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'http://placekitten.com/g/64/64'
        }
    };

    return (
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);