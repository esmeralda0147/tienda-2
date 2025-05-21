import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';
import './MiniCart.css';

const Navbar = () => {
    const { cartItems, getTotalPrice, increaseQuantity, decreaseQuantity } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = getTotalPrice();
    const location = useLocation();
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMiniCart, setShowMiniCart] = useState(false);
    const [clickedOnce, setClickedOnce] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    const handleCartClick = () => {
        if (clickedOnce) {
            navigate('/cart');
        } else {
            setClickedOnce(true);
            setTimeout(() => setClickedOnce(false), 300);
        }
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top custom-navbar">
                <div className="container d-flex justify-content-between align-items-center">
                    <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="cart-dropdown-wrapper position-relative"
                        onMouseEnter={() => setShowMiniCart(true)}
                        onMouseLeave={() => setShowMiniCart(false)}
                    >
                        <button
                            className="btn btn-link text-white text-decoration-none position-relative"
                            onClick={handleCartClick}
                        >
                            <i className="bi bi-cart fs-4"></i>
                            {totalItems > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        <div className={`mini-cart-dropdown shadow ${showMiniCart ? 'fade-in' : 'fade-out'}`}>
                            {showMiniCart && (
                                <div className="p-3">
                                    <h6 className="mini-cart-title">Tu carrito</h6>
                                    <ul className="list-unstyled mini-cart-list">
                                        {cartItems.length === 0 ? (
                                            <li className="text-muted">El carrito está vacío</li>
                                        ) : (
                                            cartItems.map(item => (
                                                <li key={item.id} className="mini-cart-item">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="item-name">{item.name}</span>
                                                        <span className="item-total-price">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center mt-1">
                                                        <div className="quantity-controls">
                                                            <button onClick={() => decreaseQuantity(item.id)} className="btn btn-sm btn-outline-secondary">-</button>
                                                            <span className="mx-2">{item.quantity}</span>
                                                            <button onClick={() => increaseQuantity(item.id)} className="btn btn-sm btn-outline-secondary">+</button>
                                                        </div>
                                                        <small className="unit-price">(${item.price.toFixed(2)} c/u)</small>
                                                    </div>
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                    <div className="d-flex justify-content-between fw-bold mt-3 total-section">
                                        <span>Total:</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="mt-3 text-end">
                                        <Link to="/cart" className="btn custom-cart-btn w-100">
                                            Ver carrito
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={closeSidebar}></div>

            <div className={`sidebar ${sidebarOpen ? 'show' : ''}`}>
                <ul className="navbar-nav flex-column">
                    {[
                        { to: '/', text: 'Inicio' },
                        { to: '/store', text: 'Tienda' },
                        { to: '/blog', text: 'Blog' },
                        { to: '/services', text: 'Servicios' },
                        { to: '/about', text: 'Sobre Nosotros' },
                        { to: '/contacto', text: 'Contáctenos' }, // ✅ corregido aquí
                    ].map(({ to, text }) => (
                        <li className="nav-item" key={to}>
                            <Link
                                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                                to={to}
                                onClick={closeSidebar}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar
