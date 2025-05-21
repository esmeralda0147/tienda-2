// src/data/products.js

const products = [
    {
        id: 1,
        name: 'Chocolate 100% Cacao',
        image: '/images/chocolate100.jpg',
        description: 'Chocolate puro sin azúcar ni aditivos, ideal para recetas saludables.',
        ingredients: ['Pasta de cacao 100%'],
        options: [
            { size: '50g', price: 8000 },
            { size: '100g', price: 15000 },
            { size: '200g', price: 18000 }
        ]
    },
    {
        id: 2,
        name: 'Cocoa Natural 500 gramos',
        image: '/images/cocoa-natural.jpg',
        description: 'Cocoa sin alcalinizar, con su sabor original y propiedades antioxidantes.',
        ingredients: ['Cacao en polvo natural'],
        options: [
            { size: '250g', price: 9000 },
            { size: '500g', price: 15000 },
            { size: '1kg', price: 27000 }
        ]
    },
    {
        id: 3,
        name: 'Cobertura de Chocolate Amargo',
        image: '/images/cobertura-amargo.jpg',
        description: 'Perfecta para repostería, con un intenso sabor a cacao.',
        ingredients: ['Cacao', 'Manteca de cacao', 'Azúcar'],
        options: [
            { size: '100g', price: 12000 },
            { size: '200g', price: 18000 },
            { size: '500g', price: 22000 }
        ]
    },
    {
        id: 4,
        name: 'Cocoa Alcalinizada',
        image: '/images/cocoa-alcalina.jpg',
        description: 'Cocoa con proceso de alcalinización, más suave al paladar.',
        ingredients: ['Cacao alcalinizado'],
        options: [
            { size: '250g', price: 10000 },
            { size: '500g', price: 16000 },
            { size: '1kg', price: 29000 }
        ]
    }
];

export default products;
