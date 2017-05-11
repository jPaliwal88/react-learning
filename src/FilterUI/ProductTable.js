import React from 'react';
import ProductList from './ProductList';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {

    render() {
        var rows = [];
        var lastCat = null;

        this.props.products.forEach((product, index) => {

            if(product.name.search(new RegExp(this.props.filterText, "i")) === -1
                || (!product.stocked && this.props.stockOnly))
            {
                return;
            }

            if(product.category !== lastCat) {
                rows.push(<ProductCategoryRow  category={product.category} key={product.category}/>);
            }

            rows.push(<ProductList product={product}  key={index} />);
            lastCat = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

        );

    }
}


export default ProductTable;