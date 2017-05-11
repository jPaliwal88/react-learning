import React from 'react';
import ListItems from "./ListItems";


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

                <ListItems  items={unreadMessages}/>
            </div>
        );
    };
};

export default Mailbox;