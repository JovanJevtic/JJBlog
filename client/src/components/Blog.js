import Moment from 'react-moment';
import MDEditor from '@uiw/react-md-editor';
import { Image } from 'cloudinary-react';

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div className="blog">
            <h1>{ blog.title }</h1>
            <p>Written by: { blog.author } </p>
            <p>Date: <Moment format="DD/MM/YYYY" date={blog.date} /></p>
            <p>{ blog.description }</p>
            <Image style={{maxWidth: '900px'}} cloud_name="jovan" crop="scale" publicId={blog.thumbnail.public_id} />
            <MDEditor.Markdown source={blog.body} />
        </div>
    );
};

export default Blog;
