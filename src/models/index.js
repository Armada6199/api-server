const {Sequelize,DataTypes}=require('sequelize');
//we are checking the database uri if it is test we will use the sqlite otherwise we will use postgress
const DATABSE_URI=process.env.NODE_ENV==='test'?'sqlite:meory:':process.env.DBURL;
//if we are in the production phase then we gonna use the options, if not we gonna don't use it
const sequalizeOptions=process.env.NODE_ENV==='production'?{
dialectOptions:{
    // ssl:{
    //     require:true,
    //     rejectUnauthorized:false
    // }
}
}:{};
//create instance from ssequelize and pass to it the DATABSE_URI that we determin it  and  the the options
const sequelize=new Sequelize(DATABSE_URI,sequalizeOptions);
const cars=require("./cars");
const food=require('./food')
//now we will export the database instance to we can use it in the main index
module.exports={
    db:sequelize,
    Cars:cars(sequelize,DataTypes),
    Food:food(sequelize,DataTypes)
};