const express=require('express');
const app=express();
const carsRouter=require("./routes/carsRoute");

app.use(express.json());
app.get('/',(req,res,next)=>{
    res.send('you are on the home page try using a car name ')
})
app.use(carsRouter)

function serverStart(PORT){
    app.listen(PORT,()=>{
        console.log(`listing on port ${PORT}`)
    })
}
module.exports={serverStart,app}