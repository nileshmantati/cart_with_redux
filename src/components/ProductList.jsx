import React from 'react';
import ProductItem from './ProductItem';
import { Container, Row, Col } from 'react-bootstrap';
import '../assest/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg';
import '../assest/images.jpg';

const products = [
    {
        id: 1,
        name: "iPhone 14",
        image: '../assest/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg',
        price: 1000
    },
    {
        id: 2,
        name: "Samsung S22",
        image: '../assest/images.jpg',
        price: 900
    },
];

function ProductList() {
    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Our Products</h2>
            <Row className="justify-content-center">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <ProductItem key={product.id} product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;
