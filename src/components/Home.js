import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/background.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="hero-section">
                <div className="hero-background" style={{ backgroundImage: `url(${background})`, height: '100vh', width: '100vw' }}></div>
                <div className="hero-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1>Chocolate Artesanal de Calidad</h1>
                    <p>Descubre nuestra selección de chocolates artesanales elaborados con los mejores ingredientes.</p>
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
