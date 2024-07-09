import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { name: 'Apple Watch Series 4', price: '$120.00', rating: 131, image: 'images/Bitmap.png' },
    { name: 'Air-Max-270', price: '$60.00', rating: 64, image: 'images/Bitmap.png' },
    { name: 'Minimal Chair Tool', price: '$24.59', rating: 63, image: 'images/Bitmap.png' },
    { name: 'Amazfit Vip', price: '$75.00', rating: 91, image: 'images/Bitmap.png' },
    { name: 'Gumbo Mouse', price: '$45.00', rating: 52, image: 'images/Bitmap.png' },
    { name: 'Camera Tripod', price: '$65.00', rating: 87, image: 'images/Bitmap.png' },

];

const ProductList = () => {
    return (
        <div style={{ padding: '20px', background: '#f1f1f9' }}>
            <h1>Favorites</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
