const serviceSchema=require("../model/service");
const mongoose= require("mongoose");

exports.addService = async (req, res) => {
    try {
        console.log(req.query);
        const service = new serviceSchema({
            service_id: req.query.service_id,
            name: req.query.name,
            description: req.query.description,
            price: req.query.price
        });

        const result = await service.save();

        res.status(201).json({
            message: 'Service added successfully!',
            service: result
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to add service!',
            error: err.message
        });
    }
};

exports.deleteService=async (req,res)=>{
    try{
        const serviceId=req.query.service_id;
        const service = await serviceSchema.findOneAndDelete({ service_id: serviceId });
        if (service) {
            res.status(200).json({ message: "Deleted successfully", service });
        } else {
            res.status(404).json({ message: "Service not found" });
        }
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
}



exports.showallService=async (req,res)=>{
    try
    {
        const service=await serviceSchema.find();
        console.log(service);
        res.json(service);
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }
}

exports.updateService=async (req,res)=>{
    try
    {
        const serviceId=req.query.service_id;
        console.log(req.query)
        const service = await serviceSchema.findOneAndUpdate({ service_id: serviceId }, req.query);
        if (service) {
            res.status(200).json({ message: "Updated successfully", service });
        } else {
            res.status(404).json({ message: "Service not found" });
        }
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }
}