
const cars=(sequelize,DataTypes)=>sequelize.define('Cars',{
    carModel:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    productionYear:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});
module.exports=cars;

