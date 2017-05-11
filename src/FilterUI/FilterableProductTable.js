import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];



class FilterableProductTable extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            stockOnly: true,
            filterText: '',
            products: PRODUCTS
        };
    }

    handleCategoryNiddle = (e) => {
        this.setState({
            filterText: e
        });
    }

    handleStockOnly = (e) => {
        this.setState({
            stockOnly: e
        });
    }

    render(){
        return(
            <div>
                <SearchBar
                    stockOnly={this.state.stockOnly}
                    filterText={this.state.filterText}
                    handleCategoryNiddle={this.handleCategoryNiddle}
                    handleStockOnly={this.handleStockOnly}/>
                <ProductTable
                    stockOnly={this.state.stockOnly}
                    filterText={this.state.filterText}
                    products={this.state.products}
                    />
            </div>
        )
    }
}

export default FilterableProductTable;