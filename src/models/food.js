
const food=(sequelize,DataTypes)=>sequelize.define('Food',{
    foodName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});
module.exports=food;

