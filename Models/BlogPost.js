const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true},
    author: { type: String, required: true},
    content: { type:String, required: true},  //should content be re-classified as 'body'?
    description: { type: String, required: true},
    likes: { type: Number, default: 0 },
    // publishDate: ?? 
});

const BlogPost = mongoose.model('BlogPost', postSchema);

module.exports = BlogPost;