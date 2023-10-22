const User = require("../model/model")
const bcrypt =require("bcrypt")


const authController ={


    registerUser:async(req,res)=>{


        try {
            const salt =await bcrypt.genSalt(10)
            const hashed =await bcrypt.hash(req.body.password, salt)

            const newUser = await new User.UserModel({
                username:req.body.username,
                email:req.body.email,
                password:hashed


            })

            //save database

            const user = await newUser.save();
            res.status(200).json(user)

            
        } catch (error) {
            res.status(500).json(err)
        }

    }


}
module.exports =authController;