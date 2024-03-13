// Product.js
import React, { useContext } from 'react';
import './shop.css';
import { ShopContext } from '../../context/shopContext';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p>{productName}</p>
                <p>{price}</p>
                <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && `(${cartItemAmount})`}</button>
            </div>
        </div>
    );
};
