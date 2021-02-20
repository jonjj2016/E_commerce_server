const products = require('../data/products');


const get = (req, res) => {
  res.status(200).json({
    status: true,
    data: products
  });
};

const create = (req, res) => {
  
};
const find = (req, res) => {
  const {id} = req.params;

  const product = products.find(item => item._id == id);
  res.status(200).json({
    status: true,
    data:product
  })
};

module.exports = {
  get,find,create
}