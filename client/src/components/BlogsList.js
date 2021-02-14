import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import '../styling/style.css';
import { Image, Transformation } from 'cloudinary-react';

const BlogsList = ({ blogs, title }) => {

    return (    
        <div className="blogs-list">
            <h2>{ title }</h2>
            {
                blogs.map(blog => (
                    <div key={blog._id} className="blogPreview">
                        <Link to={`/blog/${blog._id}`} className="blog-preview">

                            <Image style={{width: '100%', maxHeight: '420px', objectFit: 'cover'}} cloud_name="jovan" crop="scale" publicId={blog.thumbnail.public_id} />

                            <div className="blog-link">
                                <div className="blog-preview-container">
                                    <h1 className="blog-title">{ blog.title }</h1>
                                    <p className="blog-description">{ blog.description }</p>
                                    <p className="blog-author">Written by: { blog.author }</p>
                                    <Moment className="blog-date" format="YYYY/MM/DD" date={blog.date} />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogsList;
