const cloudinary = require('../config/cloudinary');
const fs = require('fs');

const cloudinaryUploader = async (req, res) => {
    try {
        const uploader = async (path) => await cloudinary.uploads(path, 'Thumbnails');

        if (req.method === 'POST') {
            const urls = [];
            const files = req.files;
    
            for (const file of files) {
                const { path } = file;
                const newPath = await uploader(path);
                urls.push(newPath);
                fs.unlinkSync(path);
            }
        }

        res.status(200).json({
            message: 'Thumbnail uploaded successfully',
            data: urls
        });
    } catch (err) {
        res.status(400).json({ err: 'Something went wrong' });
    }
}

module.exports = cloudinaryUploader;