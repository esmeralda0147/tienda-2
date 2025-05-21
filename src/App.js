import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

// Páginas
import Home from './components/Home';
import Store from './pages/Store';
import Cart from './components/Cart';
import ProductDetail from './pages/ProductDetail';
import Graciaspage from './pages/Gracias';
import BillingPage from './pages/BillingPage';
import AboutUs from './components/AboutUs';
import Servicios from './pages/Services';
import Contact from './pages/Contact';

// Nuevas páginas de blog
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
    return (
        <CartProvider>
            <Router>
                <div className="app-container">
                    <NavigationBar />
                    <main style={{ paddingTop: '60px' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/store" element={<Store />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/store/:id" element={<ProductDetail />} />
                            <Route path="/gracias" element={<Graciaspage />} />
                            <Route path="/billing" element={<BillingPage />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/services" element={<Servicios />} />
                            <Route path="/contacto" element={<Contact />} />

                            {/* ✅ Nuevas rutas para Blog */}
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:id" element={<ArticleDetail />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
