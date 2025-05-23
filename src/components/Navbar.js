import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const location = useLocation();
    const [showMiniCart, setShowMiniCart] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Cerrar el menú cuando se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.navbar-collapse') === null) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    const handleMiniCartClick = (e) => {
        e.stopPropagation();
        setShowMiniCart(!showMiniCart);
    };

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
                    <i className="bi bi-list"></i>
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

                    <div className="cart-dropdown-wrapper">
                        <button 
                            className="btn btn-link text-white text-decoration-none position-relative"
                            onClick={handleMiniCartClick}
                        >
                            <i className="bi bi-cart"></i>
                            {totalItems > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
