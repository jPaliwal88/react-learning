import React from 'react';


class Mailbox extends React.Component {
    render(){
        const unreadMessages = this.props.unreadMessages;

        return (
            <div>
                {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
                }
            </div>
        );
    };
};

export default Mailbox;