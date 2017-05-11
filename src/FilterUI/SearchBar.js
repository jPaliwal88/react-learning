import React from 'react';

class SearchBar extends React.Component {

    forwardCategoryNiddle = (e) => {
        this.props.handleCategoryNiddle(e.target.value);
    }

    forwardStockOnly = (e) => {
        this.props.handleStockOnly(e.target.checked);
    }

    render() {
        return(
            <form>
                <input type="text"  placeholder="Search..."
                       value={this.props.filterText}
                       onChange={this.forwardCategoryNiddle} />

                <label>
                    <input type="checkbox"
                           checked={this.props.stockOnly}
                           onChange={this.forwardStockOnly}/>
                    Only Show Products in stock
                </label>

            </form>
        );
    }
}

export default SearchBar;