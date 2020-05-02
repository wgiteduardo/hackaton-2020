const { Router } = require('express')
const ProductController = require('./app/controllers/ProductController')

const routes = new Router

/* Products */
routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.delete('/products/:id', ProductController.destroy)

module.exports = routes