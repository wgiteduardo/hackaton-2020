const express = require('express')
require("./database")

const server = express()
const routes = require('./routes')

server.use(express.json())
server.use(routes)

server.listen(3000)