import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { cartItems, getTotalPrice, decreaseQuantity, increaseQuantity } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const location = useLocation();
    const [showMiniCart, setShowMiniCart] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <nav className="custom-navbar navbar navbar-expand-lg">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleSidebar}
                    aria-controls="navbarNav"
                    aria-expanded={sidebarOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <i className="bi bi-list"></i>
                    </span>
                </button>

                <Link to="/" className="navbar-brand">
                    Chocolate Shop
                </Link>

                <div className={`collapse navbar-collapse ${sidebarOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                onClick={closeSidebar}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/store" 
                                className={`nav-link ${location.pathname === '/store' ? 'active' : ''}`}
                                onClick={closeSidebar}
                            >
                                Tienda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/about" 
                                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                                onClick={closeSidebar}
                            >
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/services" 
                                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                                onClick={closeSidebar}
                            >
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/contacto" 
                                className={`nav-link ${location.pathname === '/contacto' ? 'active' : ''}`}
                                onClick={closeSidebar}
                            >
                                Contacto
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/blog" 
                                className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                                onClick={closeSidebar}
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>

                    <div className="cart-dropdown-wrapper d-flex align-items-center">
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
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="item-name">{item.name}</span>
                                                        <span className="item-total-price">${(item.price * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mt-1">
                                                        <div className="quantity-controls">
                                                            <button 
                                                                onClick={() => decreaseQuantity(item.id)} 
                                                                className="btn btn-sm btn-outline-secondary"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="mx-2">{item.quantity}</span>
                                                            <button 
                                                                onClick={() => increaseQuantity(item.id)} 
                                                                className="btn btn-sm btn-outline-secondary"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <small className="unit-price">(${item.price.toFixed(2)} c/u)</small>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="d-flex justify-content-between fw-bold mt-3 total-section">
                                                <span>Total:</span>
                                                <span>${getTotalPrice().toFixed(2)}</span>
                                            </div>
                                            <div className="mt-3 text-end">
                                                <Link to="/cart" className="btn custom-cart-btn w-100">
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
