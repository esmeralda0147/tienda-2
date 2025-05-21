import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap'; // Componentes de Bootstrap
import { FaBars } from 'react-icons/fa'; // Importa el ícono de menú

const NavigationBar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark"> {/* Navbar con fondo oscuro */}
            <Container>
                {/* Nombre de la tienda (Logo o texto) */}
                <Navbar.Brand href="#">Mi Tienda</Navbar.Brand>

                {/* Botón de menú para pantallas pequeñas */}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FaBars style={{ color: 'white' }} /> {/* Ícono del menú ☰ */}
                </Navbar.Toggle>

                {/* Enlaces de la barra de navegación */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* ms-auto alinea a la derecha */}
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Productos</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
