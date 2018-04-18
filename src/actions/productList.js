import React, {Component} from 'react';
import ShowProductList from './showProductList'
import './product.css'

const dataBase = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        image: 'https://upload-images.jianshu.io/upload_images/5207977-974b969778aae62c.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        image: 'https://upload-images.jianshu.io/upload_images/5207977-8128fd1b023ff72f.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    },
    {
        barcode: 'ITEM000002',
        name: '苹果',
        unit: '斤',
        price: 5.50,
        image: 'https://upload-images.jianshu.io/upload_images/5207977-ae251431b32e0623.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    },
    {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00,
        image: 'https://upload-images.jianshu.io/upload_images/5207977-cd4dd17c6c107f5b.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        image: 'https://upload-images.jianshu.io/upload_images/5207977-54c02680dd82e041.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    },
    {
        barcode: 'ITEM000005',
        name: '方便面',
        unit: '袋',
        price: 4.50,
        image: 'https://upload-images.jianshu.io/upload_images/5207977-6b7db5188418bf91.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    }
];

class ProductList extends Component {
    constructor() {
        super();
        this.dataBase = dataBase;
    }

    render() {
        const showProductAll = this.dataBase.map(item => <ShowProductList product={item} />)
        return (
            <div className='product'>
                {showProductAll}
            </div>
        )
    }
}

export default ProductList