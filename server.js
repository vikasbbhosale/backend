const express = require('express');
const app = express();
const mongoose = require('mongoose');
const product = require('./model/schema');
const connectdb = require('./Config/db');
console.log(connectdb);






app.use(express.json());

app.get('/get', async (req, res) => {
 
  res.send('hello');
});

app.get('/get/:id', async (req, res) => {
  const id = req.params.id;
  
  const data = await product.findById(id);
  res.json(data);
});

app.post("/post", async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const productExist = await product.findOne({ name });
 
    if (productExist) {
      return res.json({ message: "product already exists" });
    }
    const newProduct = await product({ name, category, price, stock });
  
    await newProduct.save();
  
   return res.json({ message: "product added successfully", product: newProduct });
  
  
}
  catch (error) {
   return res.json({ message: "Server error" });
  }
});




app.put("/put/:id", async (req, res) => {

    
    const { name, category, price, stock } = req.body;
    const id = req.params.id;
    const update = await product.findByIdAndUpdate(id, { name, category, price, stock })
    if (update) {
      res.json({ message: "product updated successfully" });
    }
    else {
      res.json({ message: "product not found" });
    }
  });

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deleted = await product.findByIdAndDelete(id);
  if (deleted) {
    res.json({ message: "product deleted successfully" });
  }
  else {
    res.json({ message: "product not exist" });
  }
});


app.listen(5000, () => {
  console.log('Server is running.....');
});



















