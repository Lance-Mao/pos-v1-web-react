import React, {Component} from 'react';
import AppendPurchaseList from './AppendPurchaseList';
import './product.css'

class ShowPurchaseList extends Component {
    static defaultProps = {
        purchaseItems : []
    };

    constructor(props) {
        super(props);
        this.state = {
            purchaseItems:[]
        }
    }

    render() {
        const items = this.props.showPurchaseList;
        const appendList = items.map((item, index) => <AppendPurchaseList key={index} item={item}/>)

        return (
            <div className='showPurchaseList'>
                <h1>已购买列表</h1>
                {appendList}
            </div>
        );
    }
}

export default ShowPurchaseList;