import React, {Component} from 'react';
import CalculatePrice from './CalculatePrice'

class ProductClearing extends Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log("02020202");
        console.log(this.props.submitProductClearing);
        const data = this.props.submitProductClearing.map((item,i) => <CalculatePrice key={i} item={item} />);

        return (
            <div className="showPurchasedList">
                {data}
            </div>
        );
    }
}

export default ProductClearing;