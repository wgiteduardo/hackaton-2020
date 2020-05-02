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

    async find(req, res) {
        const product = await Product.find({barCode: req.params.code})
        return res.json(product)
    }
}

module.exports = new ProductController