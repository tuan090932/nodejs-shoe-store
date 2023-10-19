const mongoose = require("mongoose")
const connectDB = async () => {
 try {
    await mongoose.connect("mongodb+srv://root:123@cluster0.nsd1kzb.mongodb.net/?retryWrites=true&w=majority")
     console.log("connect suceess")  
} catch (error) {
    console.log(error)
    
}

}

module.exports =connectDB;