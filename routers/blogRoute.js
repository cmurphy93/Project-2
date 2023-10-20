const express = require('express');
const router = express.Router();
const BlogPost = require('../Models/BlogPost');

router.get('/blogposts', async (req, res) =>{
    const posts = await BlogPost.find();
    res.json(posts);
});

module.exports = router;