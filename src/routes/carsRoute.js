const express=require('express');
const router=express.Router();
const {Cars}=require("../models/index")//importing the Cars schema 

router.get('/cars',async(req,res)=>{//get all cars
    const allCars=await Cars.findAll({});//using findAll function from sequelize to get all cars
    res.status(200).send(allCars);
});
router.get('/cars/:id',async(req,res)=>{//get car by id
    const id=req.params.id;
    const car=await Cars.findOne({id});//using findOne function from sequelize to get car by id
    res.send(car);
})
router.post('/cars',async(req,res)=>{//to add new car to the schema
    const body=req.body;
    const car=await Cars.create(body);//using  create function from sequelize to add new car
    res.status(204).send(car);
});
router.put('/cars/:id',async(req,res)=>{//update the car by specific id
    const id=req.params.id;
    const data=req.body;
    const updated=await Cars.update(data,{where:{id}});//using update function from sequelize to update
    res.status(202).send(updated)
});
router.delete('/cars/:id',async(req,res)=>{//delete the car by specific id
    const id=req.params.id;
   await Cars.destroy({where:{id}});//using destroy function from sequelize to delete
    res.status(202).send("value deleted")
})
//export router
module.exports=router;