const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    content: { type:String, required: true},
    description: { type: String, required: true},
});

const BlogPost = mongoose.model('BlogPost', postSchema);

module.exports = BlogPost;

