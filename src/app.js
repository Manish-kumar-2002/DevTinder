const express = require("express")

const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName:"Manish",lastName:"Kumar"})
})
app.post("/user",(req,res)=>{
    res.send("Data Save to Database!")
})
app.delete("/user",(req,res)=>{
    res.send("Data Deleted!")
})
app.use("/test", (req,res)=>{
    res.send("Hello World!");
});

app.listen(7777,()=>{
    console.log("Server is Successfullt listening on port 7777..."); 
})