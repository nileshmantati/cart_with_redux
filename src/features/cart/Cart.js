import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} from './cartSlice';

function Cart() {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} style={{ marginBottom: "1rem" }}>
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price}</p>
                            <p>
                                Quantity:
                                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                            </p>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </>
            )}
        </div>
    );
}

export default Cart;
