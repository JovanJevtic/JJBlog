require('../routes/blogs');
const Blog = require('../models/Blog');
const { storage, fileFilter } = require('../middlewares/multer');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');

// Get All Blogs
const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

// Get Single Blog
const getSingleBlog = async (req, res, next) => {
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
}

// Upload Blog
const uploadBlog = async (req, res, next) => {

    const upload = multer({
        storage: storage,
        limits: {
          fileSize: 1024 * 1024 * 5 
        },
        fileFilter: fileFilter
    }).single('thumbnail');

    upload(req, res, err => {
        if (err) {
          return res.send(err);
        }
    
        console.log('file uploaded to server');
        console.log(req.file);

        const path = req.file.path;
        const uniqueFilename = new Date().toISOString();

        let thumbnailObject = {};

        cloudinary.uploader.upload(
            path,
            { public_id: `blog/${uniqueFilename}`, tags: `blog` },
            function(err, image) {
              if (err) return res.send(err);
              console.log('file uploaded to Cloudinary');
              const fs = require('fs');
              fs.unlinkSync(path);
              thumbnailObject = image;

                const uploadToServer = async () => {
                    const blog = new Blog({
                        title: req.body.title,
                        description: req.body.description,
                        author: req.body.author,
                        body: req.body.body,
                        thumbnail: thumbnailObject
                    });
                    
                    try {
                        const newBlog = await blog.save();
                        res.status(201).json(newBlog); 
                    } catch(err) {
                        res.status(400).json({ message: 'Something went wrong, please try again' });
                    }
                }
                uploadToServer();
            }
        )
    });
}

// Update Blog
const updateBlog = async (req, res, next) => {
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
}

// Delete Blog
const deleteBlog = async (req, res, next) => {
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
}

module.exports = {
    getAllBlogs,
    getSingleBlog,
    uploadBlog,
    updateBlog,
    deleteBlog
};