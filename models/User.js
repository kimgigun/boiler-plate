const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const saltRounds = 10;

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

userSchema.pre('save', function(next){
    console.log(`this::${this}`);
    var user = this;

    //비밀번호 암호화 시킨다
    if(user.isModified('password')){
        console.log(`1`);
        
        bcrypt.genSalt(saltRounds, function(err, salt){
         
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                console.log(`2`);
                if(err) return next(err)
                user.password = hash
                console.log('hash::'+user.password);
                next()
            });
        })
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = {User}; //user 

