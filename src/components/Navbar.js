import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cartItems, getTotalPrice } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const location = useLocation();
    const [showMiniCart, setShowMiniCart] = useState(false);

    return (
        <nav className="custom-navbar navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Chocolate Shop
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/store" 
                                className={`nav-link ${location.pathname === '/store' ? 'active' : ''}`}
                            >
                                Tienda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/about" 
                                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                            >
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/services" 
                                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                            >
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contacto" 
                                className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
                            >
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/blog" 
                                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>

                    <div className="cart-dropdown-wrapper position-relative">
                        <button 
                            className="btn btn-link text-white text-decoration-none position-relative"
                            onClick={() => setShowMiniCart(!showMiniCart)}
                        >
                            <i className="bi bi-cart fs-4"></i>
                            {totalItems > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        <div 
                            className={`mini-cart-dropdown shadow ${showMiniCart ? 'fade-in' : 'fade-out'}`}
                            onMouseEnter={() => setShowMiniCart(true)}
                            onMouseLeave={() => setShowMiniCart(false)}
                        >
                            {showMiniCart && (
                                <div className="p-3">
                                    <h6 className="mini-cart-title">Tu carrito</h6>
                                    {cartItems.length === 0 ? (
                                        <p className="text-muted">El carrito está vacío</p>
                                    ) : (
                                        <div>
                                            {cartItems.map(item => (
                                                <div key={item.id} className="mini-cart-item">
                                                    <p className="item-name">{item.name}</p>
                                                    <p className="item-total-price">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                            ))}
                                            <div className="d-flex justify-content-between fw-bold mt-3">
                                                <span>Total:</span>
                                                <span>${getTotalPrice().toFixed(2)}</span>
                                            </div>
                                            <div className="mt-3 text-end">
                                                <Link to="/cart" className="btn btn-primary w-100">
                                                    Ver carrito
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
