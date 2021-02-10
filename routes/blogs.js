const express = require('express');
const router = express.Router();

const {
  getAllBlogs,
  getSingleBlog,
  uploadBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blogsController');

//* Get all blogs
router.get('/', getAllBlogs);

//* Get single blog
router.get('/:id', getSingleBlog);

//* Upload blog
router.post('/', uploadBlog);

//* Delete blog
router.delete('/:id', deleteBlog);

//* Update blog
router.patch('/:id', updateBlog );

module.exports = router;