const mogoose = require('mongoose')
const Schema = mogoose.Schema

const usersSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'cars'
    }]
})

module.exports = mogoose.model('user', usersSchema)