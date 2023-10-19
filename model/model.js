const mongoose = require('mongoose');

const productSchema  = new mongoose.Schema({




    name:String,
    description: String,
    brand: String,
    price: Number,
    stock: Number,
    ratings: [Number],
    sizes: [String],
    colors: [String],
    images: [String],



});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;