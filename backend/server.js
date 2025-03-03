const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const Restaurant=require('./schema.js')
require('dotenv').config();

const  app=express();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MongoUrl)
.then(()=>console.log("mongoDb connected")
)
.catch(err=>console.log(err))

app.get('/Home',(req,res)=>{
    try {
        console.log("retrived");
        res.status(200).json("retrived")
        
    } catch (error) {
        console.log(error);   
    }
    
})

app.post("/Home",(req,res)=>{
    const { name,location,cuisine,rating,menu}=req.body
    const newRestaurant=new Restaurant
    newRestaurant.save()
    try {
        res.status(200).json("created")
    } catch (error) {
       console.log(error);
        
    }
})

app.put("/resart/:id",(req,res)=>{
    const { name,location,cuisine,rating,menu}=req.params.id,req.body,{new:true};
    
    try {
        if(!name||!location||!cuisine||!rating||!menu)FindByIdAndUpdate {
            res.json("required all to update")
        }res.status(200).json("updated")
    } catch (error) {
        console.log(error);
        
    }

})
app.delete("/resart",req,res=>{
    const { name,location,cuisine,rating,menu}=req.params.id,req.body,{new:true};
    
    try {
        if(!name||!location||!cuisine||!rating||!menu) findByIdAndDelet{
            res.json("required all to delete")
        }res.status(200).json("deleted")
    } catch (error) {
        console.log(error);
        
    }
})



const Port=process.env.Port||5000
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
    
})