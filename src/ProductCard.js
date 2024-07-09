import React from 'react';
import './index.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <i className="fas fa-chevron-left chevron-icon"></i>
                <img src={product.image} alt={product.name} className="product-image" />
                <i className="fas fa-chevron-right chevron-icon"></i>
            </div>
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-price">
                    {product.price}
                    <i className="fas fa-heart favorite-icon"></i>
                </div>
                <div className="product-rating">
                    {[...Array(5)].map((star, index) => (
                        <span key={index}>⭐</span>
                    ))}
                </div>
                <button className="edit-button">Edit Product</button>
            </div>
        </div>
    );
};

export default ProductCard;
