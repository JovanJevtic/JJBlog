import { Link } from 'react-router-dom';

const BlogsList = ({ blogs, title }) => {
    return (
        <div className="blogs-list">
            <h2>{ title }</h2>
            {
                blogs.map(blog => (
                    <Link className="blog-link" to={`/blog/${blog.id}`}>
                        <div className="blog" key={blog.id}>
                            <h1>{ blog.title }</h1>
                            <p>{ blog.body }</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default BlogsList;
