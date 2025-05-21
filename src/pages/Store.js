// src/pages/Store.js
import React, { useState } from 'react';
import products from '../data/products';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import fondo from '../assets/fondo.jpg';
import './Store.css';

const Store = () => {
    const { addToCart } = useCart();
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (productId, value) => {
        setQuantities({ ...quantities, [productId]: parseInt(value) });
    };

    return (
        <div
            className="store-page"
            style={{
                position: 'relative',
                backgroundImage: `url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            <div className="overlay" />
            <div className="store-content">
                <h1 className="store-title">Nuestra Tienda de Chocolates</h1>
                <div className="product-grid">
                    {products.map((product) => {
                        const basePrice = product.options ? Math.min(...product.options.map(opt => opt.price)) : product.price;
                        const defaultOption = product.options ? product.options[0] : null;

                        return (
                            <div className="product-card" key={product.id}>
                                <Link to={`/store/${product.id}`}>
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </Link>
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">Desde ${basePrice.toLocaleString()}</p>

                                {product.options ? (
                                    <Link to={`/store/${product.id}`} className="view-product-btn">
                                        Ver producto
                                    </Link>
                                ) : (
                                    <div className="quantity-wrapper">
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantities[product.id] || 1}
                                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                            className="quantity-input"
                                        />
                                        <button
                                            className="add-to-cart-btn"
                                            onClick={() =>
                                                addToCart(product, quantities[product.id] || 1)
                                            }
                                        >
                                            Agregar al carrito
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Store;
