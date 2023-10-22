const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Chọn cổng máy chủ

const authRoute = require("./routes/auth")


// Kết nối đến cơ sở dữ liệu MongoDB (đảm bảo bạn đã import connectDB từ tệp connectDB.js)
const connectDB = require('./configs/database');
connectDB();

// Định nghĩa các tuyến đường (routes) của ứng dụng
app.get('/', (req, res) => {
  res.send('Chào mừng đến với ứng dụng của bạn!!!');
});

// Thêm tuyến đường khác tại đây

// Lắng nghe máy chủ trên cổng đã chọn
app.listen(port, () => {
  console.log(`Ứng dụng đang chạy trên cổng ${port}`);
});

//ROUTES
app.use("/v1/auth",authRoute);






const ProductModel = require("./model/model");
const newProduct = new ProductModel({
    name: "Product Name",
    description: "Product Description",
    brand: "Product Brand",
    price: 100,
    stock: 10,
    ratings: [4, 5],
    sizes: ["S", "M", "L"],
    colors: ["Red", "Blue"],
    images: ["image1.jpg", "image2.jpg"],
  });
  
  newProduct.save()
    .then((result) => {
      console.log("Product saved:", result);
    })
    .catch((error) => {
      console.error("Error saving product:", error);
    });
