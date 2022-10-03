const mongoose = require('mongoose');
//const moment=require('moment');
// const todate= new Date();

const teacherschema=new mongoose.Schema({
    name:String,
    id:Number,
    subject:String,
    dob:{
        type:Date
    },
    age:String,
    img:
    {
        data: Buffer,
        contentType: String
    },
    gender:String
})

module .exports=mongoose.model('teachers',teacherschema);