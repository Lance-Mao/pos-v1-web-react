import React, {Component} from 'react';
import './product.css'

class ShowProductList extends Component {
    constructor() {
        super();
        this.state = {name: "", unit: "", price: "", barcode: "", count: 0, productItem: []};
    }

    incrementCountOfAdd(product) {
        // console.log(product);
        this.setState({
            barcode: product.barcode,
            name: product.name,
            unit: product.unit,
            price: product.price,
            count: this.state.count += 1
        });
    }

    incrementCountOfLess(product) {
        this.setState({
            barcode: product.barcode,
            name: product.name,
            unit: product.unit,
            price: product.price,
            count: this.state.count > 1 ? this.state.count -= 1 : this.state.count = 0 | alert("最低数量不能小于0")
        });
    }

    getShoppingCart() {
        //向父组件传值
        const item = this.state.productItem;
        if (item.length === 0) {
            item.push(this.state);
        }

        if (this.state.count !== 0) {
            item.forEach((elem, index) => {
                if (elem.barcode === this.state.barcode) {
                    item[index] = this.state;
                } else {
                    item.push(this.state);
                }
            });
            this.setState({
                productItem: item.filter(e => item.filter(e1 => e !== e1))
            });
            this.props.getShoppingCart(this.state.productItem);
        } else {
            alert("购买数量为0");
            return;
        }
    }

    render() {
        const product = this.props.product;

        return (
            <div className="product-details">
                <div>
                    <img src={product.image}/>
                </div>
                <div>
                    <span className="product-name">名称：{product.name}</span>
                </div>
                <div>
                    <span className="product-price">单价：{product.price}元/{product.unit}</span>
                </div>
                <div className="product-addCart">
                    <span>
                        <button onClick={this.incrementCountOfAdd.bind(this, product)}>+</button>
                        <button onClick={this.incrementCountOfLess.bind(this, product)}>-</button>
                        购买数量： {this.state.count}
                        </span>
                    <button className="addCart" onClick={this.getShoppingCart.bind(this)}>添加到购物车</button>
                </div>
            </div>
        )
    }
}

export default ShowProductList;