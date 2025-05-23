import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-section">
            {/* Recuadro para la descripción principal */}
            <div className="company-description-wrapper">
                <h3>Conoce nuestra historia</h3>
                <p>
                    Desde siempre, el campo ha sido mi hogar. Crecí rodeada de naturaleza, donde cada alimento tiene su tiempo, su proceso y su esencia. Aprendí que transformar un producto no significa alterarlo, sino resaltar lo mejor de él.

                    Esa pasión por la transformación me llevó a estudiar química. Quería entender cómo mejorar los alimentos de forma natural, solo respetando lo que la naturaleza ya nos da. En ese camino, descubrí el cacao. Mi madre comenzó a hacer chocolate de manera artesanal y, al sumergirme en ese mundo, me di cuenta de que el cacao es un tesoro poco explorado.

                    Así nació Chocolate Origen del Valle, una marca que respeta el cacao desde su origen hasta su transformación. Aquí, el proceso no es un secreto: es un arte. Cada paso está diseñado para conservar al máximo su sabor y beneficios nutricionales. Sin aditivos. Sin atajos. Solo cacao puro, trabajado con la dedicación que merece.

                    Pero no solo quiero ofrecer un buen chocolate; quiero que más personas aprendan a reconocerlo. En un mercado lleno de productos ultra procesados, mi propósito es compartir conocimiento y ayudar a las personas a disfrutar de un chocolate real, nutritivo y lleno de historia.

                    Chocolate Origen del Valle no es solo un producto, es una experiencia que conecta con quienes buscan autenticidad, calidad y un regreso a lo natural.
                </p>
            </div>

            {/* Bloques con imagen y texto alternado */}
            <div className="about-block">
                <div className="about-image">
                    <img src="/images/cosecha-cacao.jpg" alt="Cosecha de Cacao" />
                </div>
                <div className="about-text">
                    <h3>Misión</h3>
                    <p>
                        Crear conciencia sobre los verdaderos beneficios del chocolate y enseñar a identificar un buen cacao de forma sencilla. Nuestra transformación controlada y meticulosa preserva al máximo los nutrientes esenciales y el sabor auténtico del cacao, ofreciendo un chocolate puro, saludable y lleno de propiedades reales para el bienestar.
                    </p>
                </div>
            </div>

            <div className="about-block">
                <div className="about-image">
                    <img src="/images/fermentacion.jpg" alt="Fermentación del Cacao" />
                </div>
                <div className="about-text">
                    <h3>Visión</h3>
                    <p>
                        Ser una marca reconocida por su calidad excepcional, donde las personas descubran una nueva forma de disfrutar el chocolate, valorando su riqueza nutricional y autenticidad. Nuestro compromiso es ofrecer un producto que va más allá de lo comercial, enseñando a los consumidores a experimentar el cacao en su mejor versión, con menos ingredientes y más beneficios reales. Menos es más.
                    </p>
                </div>
            </div>

            <div className="about-block">
                <div className="about-image">
                    <img src="/images/secar.jpg" alt="Secado del Cacao" />
                </div>
                <div className="about-text">
                    <h3>Valores</h3>
                    <p>
                        PUREZA: Ingredientes naturales, sin aditivos ni procesos que alteren el cacao.

                        TRANSPARENCIA: Información clara sobre los beneficios reales y nutrientes del producto.

                        CONSCIENCIA: Un chocolate que conserva sus propiedades esenciales para la salud.

                        RESPETO: Cada grano es tratado con precisión para preservar su esencia.

                        SOSTENIBILIDAD: Compromiso con prácticas responsables en la producción.

                        CALIDAD: Un proceso cuidadosamente diseñado para garantizar un chocolate excepcional en sabor y beneficios.
                    </p>
                </div>
            </div>

            <div className="about-block">
                <div className="about-image">
                    <img src="/images/equipo.jpg" alt="Nuestro Equipo" />
                </div>
                <div className="about-text">
                    <h3>Diferenciador y Enfoque</h3>
                    <p>
                        Nuestro compromiso es cuidar los nutrientes del cacao para que lleguen intactos al consumidor.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;



