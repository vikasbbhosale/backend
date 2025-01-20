const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/");

const userSchema = mongoose.Schema({
  
    name: String,
    category: String,
    price: Number,
    stock: Number
  
  
   
});

module.exports = mongoose.model("items", userSchema);