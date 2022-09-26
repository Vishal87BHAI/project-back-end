const mongoose = require('mongoose');

const userschema=new mongoose.Schema({
    id:String,
    name:String,
    password:String
})

module .exports=mongoose.model('registeration',userschema)