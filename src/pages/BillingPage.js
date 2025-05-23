import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './BillingPage.css';

const BillingPage = () => {
    const { cartItems, getTotalPrice, clearCart } = useCart();
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        barrio: '',
        ciudad: '',
        departamento: '',
        municipio: '',
        codigoPostal: '',
        cupon: '',
    });
    const [envio] = useState(0); // si no usas setEnvio
    const [descuento, setDescuento] = useState(0);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const aplicarCupon = () => {
        if (form.cupon === 'DESCUENTO10') {
            setDescuento(0.10);
            alert('Cupón aplicado: 10% de descuento');
        } else {
            setDescuento(0);
            alert('Cupón no válido');
        }
    };

    const totalConDescuento = (getTotalPrice() - getTotalPrice() * descuento) + envio;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            alert('No tienes productos en el carrito.');
            return;
        }

        clearCart();
        navigate('/gracias');
    };

    return (
        <div className="billing-container">
            <h2>Finalizar Compra</h2>
            <div className="form-resumen">
                <form className="billing-form" onSubmit={handleSubmit}>
                    <input name="nombre" placeholder="Nombre completo" required onChange={handleChange} />
                    <input name="email" placeholder="Correo electrónico" type="email" required onChange={handleChange} />
                    <input name="telefono" placeholder="Teléfono" required onChange={handleChange} />
                    <input name="direccion" placeholder="Dirección" required onChange={handleChange} />
                    <input name="barrio" placeholder="Barrio" required onChange={handleChange} />
                    <input name="ciudad" placeholder="Ciudad" required onChange={handleChange} />
                    <input name="departamento" placeholder="Departamento" required onChange={handleChange} />
                    <input name="municipio" placeholder="Municipio" required onChange={handleChange} />
                    <input name="codigoPostal" placeholder="Código Postal" required onChange={handleChange} />

                    <div className="cupon-box">
                        <input name="cupon" placeholder="Cupón de descuento" onChange={handleChange} />
                        <button type="button" onClick={aplicarCupon}>Aplicar</button>
                    </div>

                    <button type="submit" className="finalizar-btn">Finalizar Compra</button>
                </form>

                <div className="resumen">
                    <h3>Resumen del Pedido</h3>
                    <ul>
                        {cartItems.map((item, idx) => (
                            <li key={idx}>
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <p><span>Subtotal:</span><span>${getTotalPrice().toFixed(2)}</span></p>
                    <p><span>Envío:</span><span>${envio}</span></p>
                    {descuento > 0 && (
                        <p><span>Descuento:</span><span>-${(getTotalPrice() * descuento).toFixed(2)}</span></p>
                    )}
                    <h4><span>Total:</span><span>${totalConDescuento.toFixed(2)}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;

