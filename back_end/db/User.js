const mongoose = require('mongoose');

const userschema=new mongoose.Schema({
    email:String,
    name:String,
    password:String
})

module.exports=mongoose.model('users', userschema);