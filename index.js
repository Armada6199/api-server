require('dotenv').config();//import .env to use the environment file
const {db}=require('./src/models/index');//import db from sequelize
const PORT=process.env.PORT;

//import the start function from the server 
const {serverStart} =require('./src/server');

//connection to the database 
db.sync().then(()=>{
    serverStart(PORT)
}).catch(err=>console.log(`sorry ${err}`))
