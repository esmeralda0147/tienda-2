import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import fondo from '../assets/fondo.jpg';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleQuantityChange = (id, event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <div
            className="cart-page"
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                paddingTop: '100px',
                paddingBottom: '50px',
            }}
        >
            <div className="cart-container">
                <h2>Carrito de Compras</h2>

                {cartItems.length === 0 ? (
                    <p className="empty-cart">🛒 El carrito está vacío</p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p>Cantidad:
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, e)}
                                                className="quantity-input"
                                            />
                                        </p>
                                        <p>Precio unitario: ${item.price.toFixed(2)}</p>
                                        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <h3>Total a pagar: ${getTotalPrice().toFixed(2)}</h3>
                            <button className="checkout-button" onClick={() => navigate('/billing')}>
                                Finalizar compra
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
