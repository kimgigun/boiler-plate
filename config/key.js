if(process.env.NODE_ENB === 'production'){
    module.exports = require('./prd');
}   else {
    module.exports = require('./dev');
}