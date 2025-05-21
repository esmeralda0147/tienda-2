import React from "react";
import { Link } from "react-router-dom";
import './Services.css'; // CSS con fondo y estilos
import fondo from '../assets/fondo.jpg'; // Imagen de fondo

const Services = () => {
    const services = [
        {
            titulo: "Maquilado personalizado",
            descripcion: "Transformamos tu cacao en productos terminados con identidad propia.",
            icono: "bi-hammer"
        },
        {
            titulo: "Diseño de producto",
            descripcion: "Te acompañamos en el desarrollo de chocolates únicos y adaptados al mercado.",
            icono: "bi-brush"
        },
        {
            titulo: "Asesoría técnica",
            descripcion: "Soporte en procesos químicos, control de calidad y normatividad desde el laboratorio.",
            icono: "bi-gear"
        },
        {
            titulo: "Marca propia",
            descripcion: "Acompañamiento completo para que tu producto llegue listo al mercado.",
            icono: "bi-award"
        }
    ];

    return (
        <div
            className="servicios-section"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <section className="container py-5">
                <h1 className="text-center mb-4">Nuestros Servicios</h1>
                <p className="text-center subtitulo mb-5">
                    Ofrecemos soluciones completas para transformar tu cacao en un producto de alta calidad.
                </p>

                <div className="row gy-4">
                    {services.map((servicio, index) => (
                        <div className="col-md-6 col-lg-3" key={index}>
                            <div className="servicio-card text-center h-100">
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <i className={`bi ${servicio.icono} icono-servicio mb-3`}></i>
                                    <h5 className="card-title">{servicio.titulo}</h5>
                                    <p className="card-text">{servicio.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link to="/contacto">
                        <button className="servicio-btn">
                            Contáctame
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;

