const express=require("express");
const { showallService, addService, deleteService,updateService } = require("../controller/ServiceControler");
const router=express.Router();

router.get("/",showallService);

router.get("/add-service",addService);

router.get("/delete-service",deleteService);

router.get("/update-service",updateService);

module.exports=router;