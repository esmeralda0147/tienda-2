import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <h1>Bienvenido a nuestra Tienda de Chocolate</h1>
                    <p>Descubre nuestros chocolates artesanales de la más alta calidad.</p>
                    <div className="button-container">
                        <Link to="/store" className="btn btn-primary btn-lg">VER PRODUCTOS</Link>
                        <Link to="/blog" className="btn btn-secondary btn-lg">SABER MÁS</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
