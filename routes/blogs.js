const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

//* Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
});

//* Get single blog
router.get('/:id', async (req, res) => {
    let blog;

    try { 
        blog = await Blog.findById(req.params.id); 
      if (!blog) {
        return res.status(404).json({ message: 'Sorry, the blog you are looking for does not exist' });
      }
  
      res.blog = blog;
      res.json(res.blog);
    } catch(err) {
      return res.status(500).json({ message: err.message });
    }
});

//* Upload blog
router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        body: req.body.body,
    });
      
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch(err) {
        res.status(400).json({ message: 'Something went wrong, please try again' });
    }
});

//* Delete blog
router.delete('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
      try {
        await blog.remove();
        res.json({ message: 'Sucessfully deleted' });
      } catch(err) {
        res.status(500).json({ message: err.message });
      }
    } else {
      res.status(404).json({ message: 'The blog you are looking for does not exist' });
    }
});

//* Update blog
router.patch('/:id', async (req, res) => {
    const {
        title,
        description,
        author, 
        body
      } = req.body;
    
      const blog = await Blog.findById(req.params.id);
    
      if (blog) {
        blog.title = title;
        blog.description = description;
        blog.author = author;
        blog.body = body;
        
        const updatedBlog = await blog.save();
        res.json(updatedBlog);
      } else {
        res.status(404).json({ message: 'The blog you are looking for does not exist' });
      }
});

module.exports = router;