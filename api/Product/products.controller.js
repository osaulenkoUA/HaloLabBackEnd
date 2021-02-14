const productModel = require('./products.model.js');

async function addProduct(req, res, next) {
  try {
    const product = await productModel.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}
async function getProduct(req, res, next) {
  try {
    const allProduct = await productModel.find({});
    return res.status(200).json(allProduct);
  } catch (err) {
    next(err);
  }
}

module.exports = { addProduct, getProduct };
