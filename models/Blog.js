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
    thumbnailImage: {
        type: String, 
        required: false 
    },
    bodyImages: [
        {
            type: String, 
            required: false 
        }
    ]
});

module.exports = mongoose.model('Blog', BlogSchema);