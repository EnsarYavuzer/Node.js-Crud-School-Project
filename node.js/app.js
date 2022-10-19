const express = require('express');

const app = express();

const productRoutes = require('./apii/routes/product');

app.use('/products',productRoutes);

module.exports= app; 