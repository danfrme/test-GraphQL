import React from 'react';
import './styles/productStyle.css';


export default function Product(props) {
    return (
        <div className='product-wrapper'>
            <div className='product-name' dangerouslySetInnerHTML={{__html: `${props.itemName}`}}></div>
            <img className='product-img' src={props.image} alt={props.itemName}/>
            <p className='product-price'><b>Price:</b> {`$${props.price/100}`}</p>      
            <p className='product-stock'><b>Stock</b> Available:{props.stock}</p>   
        </div>
    )
}
