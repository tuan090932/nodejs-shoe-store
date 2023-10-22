const authController = require("../controllers/authControllers");

const router = require("express").Router();
router.post("/register" ,authController.registerUser)
// thằng router đảng nhiệm cho mình biết cái router -> còn lại logic xử lý api nằm trong trằng controller

module.exports =router;