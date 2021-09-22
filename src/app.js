const bodyParser = require('body-parser')
const morgan = require('morgan')
const expres = require('express')
const mongoose = require('mongoose')

const app = expres()

const usersRoutes = require('./routes/users')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/rest-api-example')
    .then(db => console.log('db is connected'))
    .catch(err => console.log(err))

// settings
app.set('port', process.env.PORT || 3000)

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

// routes
app.use('./users', usersRoutes)

// start server
app.listen(app.get('port'), () => {
        console.log(`server on port `, app.get('port'));
})