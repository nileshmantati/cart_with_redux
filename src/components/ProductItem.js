import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    return (
        <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductItem;
