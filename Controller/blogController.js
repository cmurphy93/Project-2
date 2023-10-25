const BlogPost = require('../Models/BlogPost');

async function createBlogPost(req, res) {
    try { const { title, description, author } = req.description;

    const newBlogPost = new BlogPost({
        title,
        author,
        description,
    });

    const savedBlogPost = await newBlogPost.save();
    res.status(200).json(savedBlogPost); 
    } catch (err) {
        res.status(500).json({ error: 'Could not create'});
    }  
}

async function getBlogPost(req,res) {
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Could not find'});
    }
} 

async function updateBlogPost(req, res) {
    try { const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.description, { new: true });
    if (!updatedPost) {
        res.status(404).json({ error: 'Could not update blog post' });
    } else {
        res.json(updatedPost);
    }
}  catch (err) {
    res.status(500).json({ error: 'Could not update blog post' });
}
}

async function deleteBlogPost(req, res) {
    try { 
        const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            res.status(404).json({ error: 'Could not delete blog post' });
        } else {
            res.json(deletedPost);
        }
    } catch (err) {
        res.status(500).json({ error: 'Could not delete blog post' });
    }
}    

module.exports = {
    createBlogPost,
    getBlogPost,
    updateBlogPost,
    deleteBlogPost,
};