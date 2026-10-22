const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const products = [
  {
    id: 1,
    name: 'Aurora Lamp',
    category: 'Home Decor',
    price: 49.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Warm lighting for modern interiors and cozy evenings.'
  },
  {
    id: 2,
    name: 'Nimbus Headphones',
    category: 'Audio',
    price: 89.0,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    description: 'Wireless sound with deep bass and all-day comfort.'
  },
  {
    id: 3,
    name: 'Terra Bottle',
    category: 'Lifestyle',
    price: 24.5,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    description: 'Insulated everyday bottle designed for active routines.'
  },
  {
    id: 4,
    name: 'Pulse Smartwatch',
    category: 'Wearables',
    price: 159.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    description: 'Track health, workouts, and notifications in one sleek device.'
  },
  {
    id: 5,
    name: 'Drift Backpack',
    category: 'Travel',
    price: 74.0,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description: 'Roomy storage, durable fabric, and clean travel-ready design.'
  },
  {
    id: 6,
    name: 'Luna Speaker',
    category: 'Audio',
    price: 119.0,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    description: 'Portable premium sound with soft-touch finish and rich bass.'
  }
];

app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Momota Store API is running.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Momota Store starter is running on http://localhost:${PORT}`);
});
