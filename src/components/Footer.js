import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Chocolate Shop</h3>
                        <p>La mejor selección de chocolates artesanales</p>
                        <div className="social-links">
                            <a href="#" className="social-link">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Enlaces Rápidos</h3>
                        <ul className="footer-links">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/store">Tienda</a></li>
                            <li><a href="/about">Nosotros</a></li>
                            <li><a href="/services">Servicios</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <ul className="contact-info">
                            <li><i className="bi bi-geo-alt"></i> Calle Principal 123</li>
                            <li><i className="bi bi-telephone"></i> (555) 123-4567</li>
                            <li><i className="bi bi-envelope"></i> info@chocolateshop.com</li>
                            <li><i className="bi bi-clock"></i> Lunes - Viernes: 9:00 - 18:00</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Chocolate Shop. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
