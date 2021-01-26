import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const BlogsList = ({ blogs, title }) => {

    return (    
        <div className="blogs-list">
            <h2>{ title }</h2>
            {
                blogs.map(blog => (
                    <Link key={blog._id} className="blog-link" to={`/blog/${blog._id}`}>
                        <div className="blog">
                            <h1>{ blog.title }</h1>
                            <p>{ blog.description }</p>
                            <p>Written by: { blog.author }</p>
                            <Moment format="YYYY/MM/DD" date={blog.date} />
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default BlogsList;
