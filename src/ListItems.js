import React from 'react';


class ListItems extends React.Component {
    render(){
        const items = this.props.items;
        const listItems = items.map((item, index) =>
            <li key={index}>{item}</li>
        );
        return (
            <div>
                <ul>
                    {listItems}

                    { items.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
        );
    };
};

export default ListItems;