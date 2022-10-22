const mongoose = require('mongoose');

const studentschema=new mongoose.Schema({
    name:String,
    clas:Number,
    roll:Number,
    dob:String,
    age:Number,
    gender:String
})

module .exports=mongoose.model('students',studentschema);