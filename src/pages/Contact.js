import React from 'react';
import './Contact.css';
import fondo from '../assets/fondo.jpg'; // Imagen de fondo

const Contact = () => {
    return (
        <div className="contact-page" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="contact-form-container">
                <h1>CONTACTENOS</h1>
                <form className="contact-form">
                    <input type="text" name="name" placeholder="Tu nombre" required />
                    <input type="email" name="email" placeholder="Tu correo electrónico" required />
                    <textarea name="message" placeholder="Tu mensaje" required />
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
                <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                >
                    Escríbenos por WhatsApp
                </a>
            </div>
        </div>
    );
};

export default Contact;
