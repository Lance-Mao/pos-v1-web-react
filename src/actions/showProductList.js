import React, {Component} from 'react';

class ShowProductList extends Component {
    constructor() {
        super();
    }

    render() {
        const product = this.props.product;
        return (
            <div>
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}元/{product.unit}</span>
            </div>
        )
    }
}

export default ShowProductList;