import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { name, img, price, seller, stock } = props.cart;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div className="cart">
            <div>
                <img className="image" src={img} alt="" />
            </div>

            <div className="cart-details">
                <h4>{name}</h4>
                <p style={{ fontSize: '14px' }}>By: {seller}</p>
                <p style={{ fontSize: '17px', fontWeight: '600' }}>$ {price}</p>
                <p style={{ fontSize: '13px', fontWeight: '500' }}>Only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToProduct(props.cart)} className="cart-btn">{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Cart;