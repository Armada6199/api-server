const {Sequelize,DataTypes}=require('sequelize');
const DATABSE_URI=process.env.NODE_ENV==='test'?'sqlite:meory:':process.env.DBURL;
const sequalizeOptions=process.env.NODE_ENV==='production'?{
dialectOptions:{
    // ssl:{
    //     require:true,
    //     rejectUnauthorized:false
    // }
}
}:{};
const sequelize=new Sequelize(DATABSE_URI,sequalizeOptions);
const cars=require("./cars");
const food=require('./food')
module.exports={
    db:sequelize,
    Cars:cars(sequelize,DataTypes),
    Food:food(sequelize,DataTypes)
};