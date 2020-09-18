module.exports = require('mongoose').connect('mongodb://localhost/moviestv_db', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

