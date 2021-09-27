import React, { useEffect, useState } from 'react';
import './Main.css';
import Cart from './Cart/Cart';
import Order from '../Order/Order';

const Main = () => {
    const [carts, setCarts] = useState([]);
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    const handleAddToProduct = (product) => {
        const newProduct = [...products, product];
        setProduct(newProduct);
    }
    return (
        <div className="main-section">
            {/* carts */}
            <div className="carts">
                {
                    carts.map(cart => <Cart handleAddToProduct={handleAddToProduct} key={cart.key} cart={cart} />)
                }

            </div>
            {/* ordered */}
            <div className="order-summary">
                <Order product={products}></Order>
            </div>
        </div>
    );
};

export default Main;