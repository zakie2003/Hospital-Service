const mongoose= require("mongoose");

const serviceSchema=new mongoose.Schema({
    service_id:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    }
});

module.exports=mongoose.model("Service",serviceSchema);