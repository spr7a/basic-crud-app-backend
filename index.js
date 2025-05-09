const express=require("express");
const app=express();
const Product=require('./models/product.model.js');
const productRoute=require("./routes/product.route.js");

const mongoose=require("mongoose");
// import mongoose from 'mongoose';
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routes
app.use("/api/products",productRoute);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});



app.get("/",(req,res)=>{
    res.send("Hello there ");
});


mongoose.connect("mongodb+srv://supriya81205:iMadm1n@basic.i2devoa.mongodb.net/basic?retryWrites=true&w=majority&appName=basic")
.then(()=>{
    console.log("connected to database!");
})
.catch(()=>{
    console.log("connection failed ");
});
