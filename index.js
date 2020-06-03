const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimgi:3515@boilerplate-utq2e.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('Mongo db Conected..')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 뿅뿅'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))