const express = require('express');

const { addOrder, getOrders } = require('./orders.controller.js');

const ordersRouter = express.Router();

ordersRouter.post('/add', addOrder);
ordersRouter.get('/get', getOrders);

module.exports = ordersRouter;
