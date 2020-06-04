const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const {User} = require("./models/User");
const config = require('./config/key');



//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI,{  //몽고 db 조소 받아옴
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('Mongo db Conected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 뿅뿅'))

app.post('/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userInfo) =>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))