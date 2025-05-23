import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Carrito vacío</h2>
                <p>Aún no has agregado productos a tu carrito.</p>
                <Link to="/store" className="btn btn-primary">
                    Ir a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Tu Carrito</h2>
            
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <p>Precio: ${item.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button 
                                className="btn btn-danger"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                        <div className="cart-item-total">
                            <p>Total: ${item.price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h3>Resumen</h3>
                <div className="cart-totals">
                    <p>Subtotal: ${getTotalPrice().toFixed(2)}</p>
                    <p>IVA: ${(getTotalPrice() * 0.16).toFixed(2)}</p>
                    <p className="total">Total: ${(getTotalPrice() * 1.16).toFixed(2)}</p>
                </div>
                <div className="cart-actions">
                    <button 
                        className="btn btn-secondary"
                        onClick={clearCart}
                    >
                        Vaciar Carrito
                    </button>
                    <Link to="/billing" className="btn btn-primary">
                        Proceder al Pago
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
