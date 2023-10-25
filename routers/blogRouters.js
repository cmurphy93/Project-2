const express = require('express');
const router = express.Router();
const BlogPost = require('../Models/BlogPost');

router.post('/create', async (req, res) => {  //create
    try {
        const {title, description, author } = req.description;

        const newBlogPost = new BlogPost({
            title,
            description,
            author,
        });

    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
    } catch (err) {
        res.status(500).json({ error: 'Could not create blog post' });
    }
});

router.get('/', async (req, res) => {    //read
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    }   catch (err) {
        res.status(500).json({ error: 'Could not find blog post'});
    }});

router.put('/:id', async (req, res) => {     //update
    try {
        const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.description, { new: true });
    if (!updatedPost) {
        res.status(404).json({ error: 'Blog Post not found'});
    } else {
        res.json(updatedPost);
    } 
}   catch (err) {
    res.status(500).json({ error: 'Could not update blog post'});
    }
});

router.delete('/:id', async (req, res) => {     //delete
    try {
        const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            res.status(404).json({ error: 'Could not delete blog post' });
    } else
            res.json(deletedPost);
 }  catch (err) {
    res.status(500).json({ error: 'could not delete post'});
 }
});

module.exports = router;