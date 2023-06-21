const express=require('express');
const app=express();
const carsRouter=require("./routes/carsRoute");//import the cars router

app.use(express.json());//parse the sent body
app.get('/',(req,res,next)=>{
    res.send('you are on the home page try using a car name ')
})
app.use(carsRouter)//use the router

function serverStart(PORT){//to call the server in the index
    app.listen(PORT,()=>{
        console.log(`listing on port ${PORT}`)
    })
}
//export the start and the app to use them in the index
module.exports={serverStart,app}