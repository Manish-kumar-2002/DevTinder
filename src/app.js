const express = require("express")

const app = express();

app.use("/", (req,res)=>{
    res.send("Hello World!");
});

app.use("/blog", (req,res)=>{
    res.send("Blog");
});

app.use("/server", (req,res)=>{
    res.send("server");
});

app.listen(7777,()=>{
    console.log("Server is Successfullt listening on port 7777..."); 
})