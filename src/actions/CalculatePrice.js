import React, {Component} from 'react';

class CalculatePrice extends Component {
    render(){
        return (
            <div className="calculatePrice">
                <p>名称：{this.props.item[0].name}，小计：{this.props.item[0].price * this.props.item[0].count}元</p>
            </div>
        );
    }
}

export default CalculatePrice;