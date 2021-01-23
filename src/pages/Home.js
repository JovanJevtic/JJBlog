import { useState } from 'react';
import BlogsList from '../components/BlogsList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([ 
        {title: 'Blog1', body: 'Lorem ipsum...', id: '1'},
        {title: 'Blog2', body: 'Lorem ipsum...', id: '2'},
        {title: 'Blog3', body: 'Lorem ipsum...', id: '3'}
    ]);
    
    return (
        <div className="home-page page container">
            <BlogsList blogs={blogs} title="All blogs!" />
        </div>
    );
};

export default Home;