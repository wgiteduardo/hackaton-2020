const mongoose = require('mongoose')
const Product = require('../models/Product')

class ProductController {
    async index(req, res) {
        const products = await Product.find({})
        return res.json(products)
    }

    async store(req, res) {
        const product = await Product.create(req.body)
        return res.json(product)
    }

    async destroy(req, res) {
        const product = await Product.findById(req.params.id)
        
        if(!product)
            return res.json({error: `Cannot find product with id ${req.params.id}`})

        await product.remove()
        return res.json({message: 'Product deleted with success'})
    }
}

module.exports = new ProductController