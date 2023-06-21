const {Sequelize,DataTypes}=require('sequelize');
const DATABSE_URI=process.env.NODE_ENV==='test'?'sqlite:meory:':process.env.DBURL;
const cars=require("./cars");
const owner=require('./owner')
const Collection=require('./lib/collections');
const sequalizeOptions=process.env.NODE_ENV==='production'?{
dialectOptions:{
    // ssl:{
    //     require:true,
    //     rejectUnauthorized:false
    // }
}
}:{};
const sequelize=new Sequelize(DATABSE_URI,sequalizeOptions);
const carsModel=cars(sequelize,DataTypes);
const ownerModel=owner(sequelize,DataTypes);
ownerModel.hasMany(carsModel,{foreignKey:'ownerId',sourceKey:'id'});
carsModel.belongsTo(ownerModel,{foreignKey:'ownerId',targetKey:'id'});
carsModel.belongsToMany(ownerModel,{ through: 'carOwners' });
const carsCollection=new Collection(carsModel);
const ownerCollection=new Collection(ownerModel);
module.exports={
    db:sequelize,
    carsCollection,
    ownerCollection,
};