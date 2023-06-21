const express=require('express');
const router=express.Router();
const {ownerCollection}=require('../models/index');
router.get('/owner',async(req,res)=>{
    const allCars=await ownerCollection.read()
    res.status(200).send(allCars);
});
router.get('/owner/:id',async(req,res)=>{
    const id=req.params.id;
    const car=await ownerCollection.read(id)
    res.send(car);
})
router.post('/owner',async(req,res)=>{
    const body=req.body;
    const car=await ownerCollection.create(body);
    res.status(204).send(car);
});
router.put('/owner/:id',async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const updated=await ownerCollection.update(id,data)
    res.status(202).send(updated)
});

router.delete('/owner/:id',async(req,res)=>{
    const id=req.params.id;
   const deleted=await ownerCollection.delete(id);
    res.status(202).send("value deleted")
})

module.exports=router;