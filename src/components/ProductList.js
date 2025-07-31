import React from 'react';
import ProductItem from './ProductItem';

const products = [
    { id: 1, name: "iPhone 14", price: 1000 },
    { id: 2, name: "Samsung S22", price: 900 },
];

function ProductList() {
    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;
