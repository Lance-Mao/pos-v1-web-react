import React, {Component} from 'react';
import AppendPurchaseList from './AppendPurchaseList';
import ProductClearing from './ProductClearing'
import './product.css'

class ShowPurchaseList extends Component {
    static defaultProps = {
        purchaseItems: []
    };

    constructor(props) {
        super(props);
        this.state = {
            purchaseItems: []
        }
    }

    submitProductClearing(){
        this.setState({
            purchaseItems: this.props.showPurchaseList
        });
    }

    render() {
        const items = this.props.showPurchaseList;
        const appendList = items.map((item, index) => <AppendPurchaseList key={index} item={item}/>)

        return (
            <div className='showPurchaseList'>
                <div>
                    {appendList}
                </div>
                <button className="product-clearing" onClick={this.submitProductClearing.bind(this)}>
                    结算
                </button>
                <ProductClearing submitProductClearing={this.state.purchaseItems}/>
            </div>
        );
    }
}

export default ShowPurchaseList;