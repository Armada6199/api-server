const express=require('express');
const router=express.Router();
const {Cars}=require("../models/index")
router.get('/cars',async(req,res)=>{
    const allCars=await Cars.findAll({});
    res.status(200).send(allCars);
});
router.get('/cars/:id',async(req,res)=>{
    const id=req.params.id;
    const car=await Cars.findOne({id});
    res.send(car);
})
router.post('/cars',async(req,res)=>{
    const body=req.body;
    const car=await Cars.create(body);
    res.status(204).send(car);
});
router.put('/cars/:id',async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const updated=await Cars.update(data,{where:{id}});
    res.status(202).send(updated)
});
router.delete('/cars/:id',async(req,res)=>{
    const id=req.params.id;
   await Cars.destroy({where:{id}});
    res.status(202).send("value deleted")
})

module.exports=router;