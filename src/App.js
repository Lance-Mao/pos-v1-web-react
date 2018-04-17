import React, {Component} from 'react';
import './App.css';
import ProductList from './actions/productList'

class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        return this.dataBase;
    }
    render() {
        const itemData = this.getData();
        console.log("123456789");
        console.log(itemData);
        return (
            <div className="App">
                <ProductList/>
            </div>
        );
    }
}

export default App;
