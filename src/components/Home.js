import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-background"></div>
            <div className="hero-section">
                <h1 className="brand-name">CACAO ORIGEN DEL VALLE</h1>
                <p className="brand-description">Un viaje al sabor del cacao donde la pureza y el sabor se encuentran.</p>
            </div>
            <div className="button-container">
                <Link to="/store" className="custom-button">VER PRODUCTOS</Link>
                <Link to="/blog" className="custom-button secondary">SABER MÁS</Link>
            </div>
        </div>
    );
};

export default Home;
