const express= require("express");
const  mongoose= require("mongoose");
const serviceRouter= require("./routes/ServiceRoutes");
const app= express();
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDb connected")})
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/service", serviceRouter);

app.listen(3000,()=>{
    console.log("server Started at port 3000");
})