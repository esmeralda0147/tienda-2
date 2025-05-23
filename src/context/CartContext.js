import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para acceder al contexto
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartInitialized, setIsCartInitialized] = useState(false);

    // Cargar el carrito desde localStorage solo una vez al inicio
    useEffect(() => {
        if (!isCartInitialized) {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                try {
                    setCartItems(JSON.parse(storedCart));
                } catch (error) {
                    console.error('Error al leer el carrito desde localStorage:', error);
                    localStorage.removeItem('cart');
                }
            }
            setIsCartInitialized(true);
        }
    }, [isCartInitialized]);

    // Guardar el carrito en localStorage cada vez que cambian los productos
    useEffect(() => {
        if (isCartInitialized) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isCartInitialized]);

    // Agregar un producto al carrito
    const addToCart = (product, quantity = 1, selectedOption = null) => {
        if (!product || !product.id || quantity <= 0) return;

        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => 
                item.id === product.id && 
                (!selectedOption || item.selectedOption === selectedOption)
            );
            
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id && 
                    (!selectedOption || item.selectedOption === selectedOption)
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                const itemToAdd = {
                    ...product,
                    quantity,
                    selectedOption,
                    price: selectedOption ? selectedOption.price : product.price
                };
                return [...prevItems, itemToAdd];
            }
        });
    };

    // Eliminar un producto del carrito
    const removeFromCart = (id, selectedOption = null) => {
        setCartItems(prevItems => 
            prevItems.filter(item => 
                !(item.id === id && (!selectedOption || item.selectedOption === selectedOption))
            )
        );
    };

    // Actualizar la cantidad de un producto en el carrito
    const updateQuantity = (id, newQuantity, selectedOption = null) => {
        if (newQuantity <= 0) {
            removeFromCart(id, selectedOption);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === id && 
                    (!selectedOption || item.selectedOption === selectedOption)
                        ? { ...item, quantity: newQuantity }
                        : item
                )
            );
        }
    };

    // Incrementar la cantidad de un producto en el carrito
    const increaseQuantity = (id, selectedOption = null) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && 
                (!selectedOption || item.selectedOption === selectedOption)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrementar la cantidad de un producto en el carrito
    const decreaseQuantity = (id, selectedOption = null) => {
        setCartItems(prevItems =>
            prevItems
                .map(item =>
                    item.id === id && 
                    (!selectedOption || item.selectedOption === selectedOption)
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)  // Elimina los productos con cantidad 0
        );
    };

    // Limpiar el carrito
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    // Obtener el precio total de los productos en el carrito
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Obtener el número total de productos en el carrito
    const getTotalItems = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    // El valor del contexto que se pasará a los componentes hijos
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
