import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../pages/Blog.css';
import fondo from '../assets/fondo.jpg';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = blogData.find((item) => item.id === id);

    if (!article) {
        return <div>Artículo no encontrado</div>;
    }

    return (
        <div
            className="article-detail-container"
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="article-detail-content">
                <h1 className="detail-title">{article.title}</h1>
                <img src={article.image} alt={article.title} className="detail-image" />
                <div
                    className="detail-content"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
                <Link to="/blog" className="back-link">← Volver al blog</Link>
            </div>
        </div>
    );
};

export default ArticleDetail;
