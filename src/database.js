const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/node",
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("-> Mongo connected")
)