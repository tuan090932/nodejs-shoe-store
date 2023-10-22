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

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    shipping_address: {
      address: String,
      city: String,
      state: String,
      zip_code: String,
      country: String,
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    created_at: Date,
    updated_at: Date,
    admin:{
        type:Boolean,
        default:false,

    }


  });


const orderSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    items: [
      {
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        size: String,
        color: String,
      },
    ],
    total_price: Number,
    order_date: Date,
    status: String,
  });


const brandSchema = new mongoose.Schema({
  name: String,
  description: String,
});


const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    full_name: String,
    email: String,
    role: String, // E.g., "admin" or "superadmin"
    profile_picture: String, // URL to the admin's profile picture
    created_at: Date,
    updated_at: Date,
  });
  
const AdminModel = mongoose.model("Admin", adminSchema);
const UserModel = mongoose.model("User", userSchema);
const ProductModel = mongoose.model("Product", productSchema);
const BrandModel = mongoose.model("Brand", brandSchema);
const OrderModel = mongoose.model("Order", orderSchema);


module.exports = {
    ProductModel,
    UserModel,
    OrderModel,
    BrandModel,
    AdminModel,
  };