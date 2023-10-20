const express = require('express');
const router = express.Router();
const BlogPost = require('../Models/BlogPost');

router.post('/create', async (req, res) => {
    try {
        const {title, content, author } = req.body;

        const newBlogPost = new BlogPost({
            title,
            content,
            author,
        });

    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
    } catch (err) {
        res.status(500),json({ error: 'Could not create blog post' });
    }
});