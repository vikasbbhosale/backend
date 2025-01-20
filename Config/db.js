const mongoose =require('mongoose')

const url = "mongodb://localhost:27017/";


function connectdb() {
    mongoose
     .connect(url)
     .than(() => console.log("connected to mongodb"))
     .catch((err) => console.log("connection error", err))
}

module.exports = connectdb;