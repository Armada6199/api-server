const express=require('express');
const router=express.Router();
const {Cars, ownerCollection}=require("../models/index")
const {carsCollection}=require('../models/index');
router.get('/cars',async(req,res)=>{
    const allCars=await carsCollection.read()
    res.status(200).send(allCars);
});
router.get('/cars/:id',async(req,res)=>{
    const id=req.params.id;
    const car=await carsCollection.read(id)
    res.send(car);
})
router.post('/cars',async(req,res)=>{
    const body=req.body;
    const car=await carsCollection.create(body);
    res.status(204).send(car);
});
router.put('/cars/:id',async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const updated=await carsCollection.update(id,data)
    res.status(202).send(updated)
});
router.get('/ownerCars/:id',async(req,res)=>{
    const id=req.params.id;
    const cars=await ownerCollection.ownerCars(id,carsCollection.model);
    res.status(200).send(cars);
})
router.delete('/cars/:id',async(req,res)=>{
    const id=req.params.id;
   const deleted=carsCollection.delete(id);
    res.status(202).send("value deleted")
})

module.exports=router;