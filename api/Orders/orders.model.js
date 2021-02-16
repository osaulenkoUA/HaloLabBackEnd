const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordersSchema = new Schema({
	name: { type: String, required: true },
	number: { type: String, required: true },
	orderItem: { type: String, required: true },
	category: { type: String, required: true },
	price: { type: Number, required: true },
});

const ordersModel = mongoose.model('Order', ordersSchema);

module.exports = ordersModel;
