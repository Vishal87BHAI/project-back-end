const mongoose = require('mongoose');
//const moment=require('moment');
// const todate= new Date();

const teacherschema=new mongoose.Schema({
    name:String,
    id:Number,
    subject:String,
    dob:String,
    age:Number,
    gender:String
})

module .exports=mongoose.model('teachers',teacherschema);