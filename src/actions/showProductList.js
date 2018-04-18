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
                <div>
                    <img src={product.image} />
                </div>
                <div>
                    <span className="product-name">商品名称：{product.name}</span>
                </div>
                <div>
                    <span className="product-price">商品单价：{product.price}元/{product.unit}</span>
                </div>
            </div>
        )
    }
}

export default ShowProductList;