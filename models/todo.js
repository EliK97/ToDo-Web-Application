const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
        required: true
    },
    userName: String,
    userAvatar: String
},{
    timestamps:true
});

const todoSchema = new Schema({
    title: {type: String, required: true},
    taskMan: {
        type: Number,
        default: function(){}
    }

})


module.exports = mongoose.model('ToDo', todoSchema)