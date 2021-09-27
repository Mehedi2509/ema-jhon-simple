import React from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Order = (props) => {
    const { product } = props;
    let items = 0;
    let handing = 0;
    let beforeTax = 0;
    let tax = 0;
    let total = 0;
    for (const cart of product) {
        items = items + cart.price;
        handing = handing + 3.99;
        beforeTax = items + handing;
        tax = beforeTax / 10;
        total = beforeTax + tax;
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items ordered: {props.product.length}</h3>
            <p>Items: {items.toFixed(2)}</p>
            <p>Shipping & Handling: {handing.toFixed(2)}</p>
            <p>Total before tax: {beforeTax.toFixed(2)}</p>
            <p>Estimated Tax: {tax.toFixed(2)}</p>
            <h3>Order Total: {total.toFixed(2)}</h3>
            <p style={{ textAlign: 'center' }}><button style={{ padding: '8px 30px', backgroundColor: 'darkorange', color: 'white', border: '0', borderRadius: '8px', fontWeight: '600' }}>{<FontAwesomeIcon icon={faShoppingCart} />} Review Your Order</button></p>
        </div>
    );
};

export default Order;