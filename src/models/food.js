//create a a new function to generate a schema by use define function from sequelize 

const food=(sequelize,DataTypes)=>sequelize.define('Food',{
       //create columns one for foodName and one for quantity

    foodName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});
//export the food function

module.exports=food;

