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
                    <span className="product-name">名称：{product.name}</span>
                </div>
                <div>
                    <span className="product-price">单价：{product.price}元/{product.unit}</span>
                </div>
                <div className="product-addCart">
                    <button>购买</button>
                    <span>购买数量： 0</span>
                </div>
            </div>
        )
    }
}

export default ShowProductList;