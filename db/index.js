module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/moviestv_db', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

