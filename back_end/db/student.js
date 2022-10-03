const mongoose = require('mongoose');

const studentschema=new mongoose.Schema({
    name:String,
    class:Number,
    roll:Number,
    dob:{
        type:Date
    },
    age:Number,
    gender:String
})

module .exports=mongoose.model('students',studentschema);