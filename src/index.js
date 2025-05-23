// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
        <App />
    </CartProvider>
);
