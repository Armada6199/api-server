require('dotenv').config();
const {db}=require('./src/models/index');
const PORT=process.env.PORT;
const {serverStart} =require('./src/server');
db.sync().then(()=>{
    serverStart(PORT)
}).catch(err=>console.log(`sorry ${err}`))
