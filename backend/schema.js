const mongoose=require('mongoose')

const UserResart=new mongoose.Schema({
    name:{type:string,required:true},
    location:{type:string,required:true},
    cuisine:{type:string,required:true},
    rating:{type:Number,default:null},
    menu:[{name:{type:string,required:true},description:{type:string,},price:{type:Number,required:true}}]
});

const Restaurant=mongoose.model("Restaurant",UserResart);
module.export()