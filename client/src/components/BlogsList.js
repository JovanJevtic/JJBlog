import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import '../styling/style.css';

const BlogsList = ({ blogs, title }) => {

    return (    
        <div className="blogs-list">
            <h2>{ title }</h2>
            {
                blogs.map(blog => (
                    <div className="blog-preview">
                        <Link key={blog._id} className="blog-link" to={`/blog/${blog._id}`}>
                            <div className="blog-preview-container">
                                <h1 className="blog-title">{ blog.title }</h1>
                                <p className="blog-description">{ blog.description }</p>
                                <p className="blog-author">Written by: { blog.author }</p>
                                <Moment className="blog-date" format="YYYY/MM/DD" date={blog.date} />
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogsList;
