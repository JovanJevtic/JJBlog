const BlogsList = ({ blogs, title }) => {
    return (
        <div className="blogs-list">
            <h2>{ title }</h2>
            {
                blogs.map(blog => (
                    <div className="blog" key={blog.id}>
                        <h1>{ blog.title }</h1>
                        <p>{ blog.body }</p>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogsList;
