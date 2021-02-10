import Moment from 'react-moment';
import MDEditor from '@uiw/react-md-editor';

const Blog = ({ blog }) => {

    console.log(blog)

    return (
        <div className="blog">
            <h1>{ blog.title }</h1>
            <p>Written by: { blog.author } </p>
            <p>Date: <Moment format="DD/MM/YYYY" date={blog.date} /></p>
            <p>{ blog.description }</p>
            <img src={blog.thumbnail} />
            <MDEditor.Markdown source={blog.body} />
            <img src={blog.thumbnail} />
        </div>
    );
};

export default Blog;
