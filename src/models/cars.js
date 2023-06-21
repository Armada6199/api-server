//create a a new function to generate a schema by use define function from sequelize 
const cars=(sequelize,DataTypes)=>sequelize.define('Cars',{
   //create columns one for productionYear and one for carModel
    carModel:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    productionYear:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});
//export the cars function
module.exports=cars;

