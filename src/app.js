const express = require("express");
const connectDB = require("./config/database");
const app = express();

const User = require("./models/user")

app.use(express.json())

app.post("/signup", async (req,res) =>{
  const user = new User(req.body)

  try{
    await user.save();
  res.send("user Added successfully!")
  }catch(err){
    res.status(400).send("Error saving the user:"+ err.message)
  }
})

app.get("/alluser",async (req,res)=>{
  
  try{
    const userAll = await User.find({})
    res.send(userAll)
  }catch(err){
    res.status(404).send("somthing went worng!")
  }
})

app.get("/userfindbyemail",async (req,res)=>{
  const userEmail = req.body.emailId
  try{
    const userFindByEmail = await User.find({emailId:userEmail})
    res.send(userFindByEmail)
  }catch(err){
    res.status(404).send("somthing went worng!")
  }
})

connectDB().then(()=>{
  console.log("DataBase Connection established...");
  app.listen(7777, () => {
    console.log("Server is Successfullt listening on port 7777...");
  });
}).catch((err)=>{
  console.log("DataBase connot be connected!!");
})

