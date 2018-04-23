import React, {Component} from 'react';
import './product.css'

class AppendPurchaseList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="showPurchasedList">
                <p>
                    <span>名称：</span>
                    <span>{this.props.item[0].name}</span>
                </p>
                <p>
                    <span>单价:</span>
                    <span>{this.props.item[0].price}元/{this.props.item[0].unit}</span>
                </p>
                <p>
                    <span>数量：</span>
                    <span>{this.props.item[0].count}</span>
                </p>
            </div>
        )
    }
}

export default AppendPurchaseList;