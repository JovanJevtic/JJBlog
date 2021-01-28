import Moment from 'react-moment';
import MDEditor from '@uiw/react-md-editor';

const Blog = ({ blog }) => {

    const markdown = '# Headline <br/> `npm install` '; 
    

    return (
        <div className="blog">
            <MDEditor.Markdown source={markdown} />
            <h1>{ blog.title }</h1>
            <p>Written by: { blog.author } </p>
            <p>Date: <Moment format="DD/MM/YYYY" date={blog.date} /></p>
            <p>{ blog.description }</p>
            <p>{ blog.body }</p>
        </div>
    );
};

export default Blog;
