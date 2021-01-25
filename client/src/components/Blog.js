import Moment from 'react-moment';

const Blog = ({ blog }) => {

    return (
        <div>
            <h1>{ blog.title }</h1>
            <p>Written by: { blog.author } </p>
            <p>Date: <Moment format="DD/MM/YYYY" date={blog.date} /></p>
            <p>{ blog.description }</p>
            <p>{ blog.body }</p>
        </div>
    );
};

export default Blog;
