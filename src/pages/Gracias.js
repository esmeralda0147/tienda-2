import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import fondo from '../assets/fondo.jpg';  // Verifica que la ruta de la imagen sea correcta

const Gracias = () => {
    const { cartItems, clearCart } = useCart();
    const location = useLocation();  // Obtiene los parámetros de la URL
    const [isLoading, setIsLoading] = useState(true);  // Estado para mostrar carga
    const [error, setError] = useState(null);  // Estado para manejar errores

    useEffect(() => {
        const sendOrderToBackend = async () => {
            try {
                setIsLoading(true);  // Inicia la carga
                await axios.post('http://localhost:3001/api/pedidos', {
                    items: cartItems,
                    wompiData: location.search, // Si necesitas los parámetros de la URL
                });
                console.log('Pedido guardado');
                clearCart(); // Limpia el carrito después de guardar el pedido
            } catch (error) {
                console.error('Error al guardar pedido:', error);
                setError('Hubo un error al procesar tu pedido. Intenta nuevamente más tarde.');
            } finally {
                setIsLoading(false);  // Finaliza la carga
            }
        };

        sendOrderToBackend();
    }, [cartItems, location.search, clearCart]);

    return (
        <div
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                padding: '3rem',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            }}>
                {isLoading ? (
                    <h2>Cargando tu pedido...</h2>  // Mensaje mientras se procesa
                ) : (
                    <>
                        <h1>¡Gracias por tu compra! 🛍️</h1>
                        <p>Tu pedido fue procesado exitosamente.</p>
                        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mensaje de error si hubo algún fallo */}

                        {/* Mostrar el resumen de los productos comprados */}
                        <h3>Resumen de tu pedido:</h3>
                        <ul>
                            {cartItems.map((item, idx) => (
                                <li key={idx}>
                                    {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                                </li>
                            ))}
                        </ul>
                        <p><strong>Total: </strong>${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Gracias;
