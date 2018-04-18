import React, {Component} from 'react';
import './product.css'

class ShowProductList extends Component {
    constructor() {
        super();
        this.state = {count : 0}
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount(){
        this.setState({count: this.state.count + 1});
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
                    <button onClick={this.incrementCount}>购买</button>
                    <span>购买数量： {this.state.count}</span>
                </div>
            </div>
        )
    }
}

export default ShowProductList;