import React, {Component} from 'react';
import './product.css'

class ShowProductList extends Component {
    constructor() {
        super();
    }

    render() {
        const product = this.props.product;
        return (
            <div className="product-details">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}元/{product.unit}</span>
            </div>
        )
    }
}

export default ShowProductList;