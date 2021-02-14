const express = require('express');

const { addProduct, getProduct } = require('./products.controller.js');

const productsRouter = express.Router();

productsRouter.post('/add', addProduct);
productsRouter.get('/get', getProduct);

module.exports = productsRouter;
