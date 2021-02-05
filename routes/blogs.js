const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
//const cloudinaryUploader = require('../middlewares/cloudinary');
const cloudinary = require('../config/cloudinary');

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
router.post('/', upload.single('thumbnail'), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  res.send(result);
}, uploadBlog);

//* Delete blog
router.delete('/:id', deleteBlog);

//* Update blog
router.patch('/:id', updateBlog );

module.exports = router;