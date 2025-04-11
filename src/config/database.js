// mongodb+srv://manish:jy3b1XuhDkxkNP0B@learnnode.l3f84hm.mongodb.net/?retryWrites=true&w=majority&appName=LearnNode
const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://manish:jy3b1XuhDkxkNP0B@learnnode.l3f84hm.mongodb.net/devTinder"
    )
}

module.exports = connectDB;
