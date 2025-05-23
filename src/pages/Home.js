import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Bienvenidos a Chocolate Shop</h1>
                    <p>Descubre la mejor selección de chocolates artesanales</p>
                    <button className="cta-button">Explorar Tienda</button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-section">
                <h2>Productos Destacados</h2>
                <div className="products-grid">
                    {/* Productos dinámicos */}
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    <h2>Nuestra Historia</h2>
                    <p>Somos una empresa dedicada a la elaboración de chocolates de alta calidad desde 2010.</p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>¡Únete a nuestra comunidad!</h2>
                    <p>Suscríbete para recibir ofertas especiales y novedades</p>
                    <button className="subscribe-button">Suscribirse</button>
                </div>
            </section>
        </div>
    );
};

export default Home;