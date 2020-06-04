const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser"); //body 부분을 가져오는 기능
const {User} = require("./models/User");
const config = require('./config/key'); //설정



//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI,{  //몽고 db 주소 받아옴
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('Mongo db Conected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 뿅뿅 ㅋㅋㅋ 지롤'))

app.post('/register', (req, res) => {

    const user = new User(req.body);
    
    console.log('3')

    user.save((err, userInfo) =>{
        console.log('4')
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        });
    });
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))