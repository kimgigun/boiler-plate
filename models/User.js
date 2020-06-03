const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxLength :50
    },
    email :{
        type : String,
        trim : true,
        unique :1
    },
    password : {
        type: String,
        maxLength : 50
    },
    role: {
        type:Number,
        defauly : 1
    }
    ,
    image : String,
    token :{
        type:String
    },
    tokenExp : {
        type :Number
    }
});

const User = mongoose.model('User', userSchema)

module.exports = {User}; //user 

