import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer" style={{
            '--footer-bg-color': '#1a1a1a',         // Fondo oscuro (puedes cambiarlo)
            '--footer-padding-vertical': '40px',   // Altura del footer (más espacio)
            '--footer-font-family': '"Poppins", sans-serif', // Fuente
            '--footer-font-size': '15px',          // Tamaño del texto
            '--footer-text-color': '#eeeeee',      // Color del texto
            '--icon-size': '24px',                 // Tamaño de íconos
            '--icon-hover-color': '#00ffcc',       // Color al pasar mouse sobre íconos
            '--link-hover-color': '#00ffcc'        // Hover de enlaces
        }}>
            <div className="container">
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Cacao Origen del Valle. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
