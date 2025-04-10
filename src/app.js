const express = require("express");

const app = express();

// app.get("/user/:useId/:userName/:Password",(req,res)=>{
//     console.log(req.params)
//     res.send({firstName:"Manish",lastName:"Kumar"})
// })

// app.get("/user",(req,res)=>{
//     res.send({firstName:"Manish",lastName:"Kumar"})
// })
app.get(
  "/user",
  (req, res,next) => {
      console.log("Data Save to Database!");
      next()
  },
  (req, res, next) => {
    console.log("Data Save to Database 2!");
    next()
  },
  (req, res, next) => {
    console.log("Data Save to Database 3!");
    next()
  },
  (req, res, next) => {
    res.send("Data Save to Database 4!");
  }
);
app.delete("/user", (req, res) => {
  res.send("Data Deleted!");
});
app.use("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(7777, () => {
  console.log("Server is Successfullt listening on port 7777...");
});
