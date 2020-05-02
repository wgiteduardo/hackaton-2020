const { Router } = require('express')
const ProductController = require('./app/controllers/ProductController')

const routes = new Router

/* Products */
routes.get('/products', ProductController.index)
routes.get('/products/:code', ProductController.find)
routes.post('/products', ProductController.store)

module.exports = routes