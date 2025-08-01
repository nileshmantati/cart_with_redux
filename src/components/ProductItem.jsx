import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Card, Button } from 'react-bootstrap';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    return (
        <div>
            <Card className="h-100 shadow-sm">
                <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    style={{ objectFit: 'contain', height: '200px' }}
                />
                <Card.Body className="d-flex flex-column align-items-center text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductItem;
