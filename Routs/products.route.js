const express = require('express');
const { get, find } = require('../Controllers/product.controllers');

const route = express.Router();

route.route('/').get(get);
route.route('/:id').get(find);


module.exports = route;