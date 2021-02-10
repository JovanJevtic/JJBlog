const mongoose = require('mongoose');

//* Blog schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: false 
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        required: false 
    },
    thumbnail: {
        type: Object, 
        required: true 
    }
});

module.exports = mongoose.model('Blog', BlogSchema);