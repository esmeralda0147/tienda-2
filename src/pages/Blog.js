import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../pages/Blog.css';
import fondo from '../assets/fondo.jpg';

const Blog = () => {
    return (
        <div
            className="blog-container"
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="blog-content">
                <h1 className="blog-title">LA CIENCIA DETRAS DEL CACAO</h1>
                <div className="articles">
                    {blogData.map((article) => (
                        <div key={article.id} className="article-card">
                            <img src={article.image} alt={article.title} className="article-image" />
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-summary">{article.summary}</p>
                            <div className="read-more-box">
                                <Link to={`/blog/${article.id}`} className="read-more">
                                    Leer más
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
