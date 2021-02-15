const mongoose = require('mongoose');

//* Blog schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true 
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
        required: true 
    },
    thumbnail: {
        asset_id: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        },
        tags: [],
        url: {
            type: String,
            required: true
        },
        secure_url: {
            type: String,
            required: true
        },
        original_filename: {
            type: String,
            required: true
        },
        bytes: {
            type: Number,
            required: true
        },
        created_at: {
            type: String,
            required: true
        },
        format: {
            type: String,
            required: true  
        },
        width: {
            type: Number,
            required: true
        },
        height: {
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model('Blog', BlogSchema);