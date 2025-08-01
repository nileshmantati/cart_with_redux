import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} from './cartSlice';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <Container className="my-5">
            <h2 className="mb-4 text-center">Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p>Your cart is empty.</p>
                    <Button href="/products" variant="primary">
                        Browse Products
                    </Button>
                </div>
            ) : (
                <Row>
                    {/* 🛒 Cart Items Section */}
                    <Col md={8}>
                        {cartItems.map((item) => (
                            <Card key={item.id} className="mb-4 shadow-sm">
                                <Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                                    <div className="d-flex align-items-center mb-3 mb-md-0">
                                        {item.image && (
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                rounded
                                                style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                                            />
                                        )}
                                        <div>
                                            <Card.Title className="mb-1">{item.name}</Card.Title>
                                            <Card.Text className="text-muted mb-0">${item.price}</Card.Text>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="d-flex align-items-center">
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                        >
                                            −
                                        </Button>
                                        <span className="mx-3 fw-bold">{item.quantity}</span>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                        >
                                            +
                                        </Button>
                                    </div>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="ms-3"
                                    >
                                        Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                    {/* ✅ Total Section */}
                    <Col md={4}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h4 className="mb-3">Order Summary</h4>
                                <p>Total Items: {cartItems.length}</p>
                                <h5>Total: ${totalPrice.toFixed(2)}</h5>
                                <Button
                                    variant="warning"
                                    className="w-100 mt-3"
                                    onClick={() => dispatch(clearCart())}
                                >
                                    Clear Cart
                                </Button>
                                <Button
                                    variant="success"
                                    className="w-100 mt-2"
                                    disabled // add actual logic here
                                >
                                    Proceed to Checkout
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Cart;
