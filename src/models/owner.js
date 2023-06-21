
const owner=(sequelize,DataTypes)=>sequelize.define('owner',{
    ownerName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    ownerAge:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

});
module.exports=owner;