import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);
    const { addToCart } = useCart();

    const [quantities, setQuantities] = useState(
        product.options.reduce((acc, opt) => {
            acc[opt.size] = 1;
            return acc;
        }, {})
    );

    const handleQuantityChange = (size, value) => {
        setQuantities(prev => ({
            ...prev,
            [size]: Math.max(1, Number(value)),
        }));
    };

    const handleAddToCart = (option) => {
        const itemToAdd = {
            id: `${product.id}-${option.size}`,
            name: product.name,
            image: product.image,
            description: product.description,
            selectedSize: option.size,
            price: option.price,
            quantity: quantities[option.size],
        };
        addToCart(itemToAdd);
    };

    return (
        <div className="product-detail-page fondo-producto">
            <div className="product-detail-wrapper">
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info-section">
                    <h2>{product.name}</h2>
                    <p className="product-description">{product.description}</p>

                    <div className="product-ingredients">
                        <h4>Ingredientes:</h4>
                        <ul>
                            {product.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="product-sizes-container">
                        {product.options.map((option, idx) => (
                            <div key={idx} className="product-option-card">
                                <h4>{option.size}</h4>
                                <p className="price">${option.price}</p>
                                <label htmlFor={`quantity-${option.size}`}>Cantidad:</label>
                                <input
                                    id={`quantity-${option.size}`}
                                    type="number"
                                    min="1"
                                    value={quantities[option.size]}
                                    onChange={(e) => handleQuantityChange(option.size, e.target.value)}
                                />
                                <p className="total">Total: ${option.price * quantities[option.size]}</p>
                                <button onClick={() => handleAddToCart(option)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
